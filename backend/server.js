// backend/server.js
import express from "express";
import fs from "fs/promises";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors()); // для разработки можно разрешить всё; в проде укажи origin
app.use(express.json());

const dataFile = path.join(__dirname, "data.json");
const statsFile = path.join(__dirname, "stats.json");

async function readJSON(file, fallback = {}) {
  try {
    const txt = await fs.readFile(file, "utf8");
    return JSON.parse(txt);
  } catch (err) {
    return fallback;
  }
}
async function writeJSON(file, data) {
  await fs.writeFile(file, JSON.stringify(data, null, 2), "utf8");
}

// GET /api/data — возвращает данные резюме
app.get("/api/data", async (req, res) => {
  try {
    const data = await readJSON(dataFile, {});
    // лог визита
    const stats = await readJSON(statsFile, { visits: 0, ipLog: [] });
    const ip = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "").split(",")[0].trim();
    stats.visits = (stats.visits || 0) + 1;
    stats.lastVisit = new Date().toISOString();
    stats.ipLog.push({ ip, time: stats.lastVisit });
    if (stats.ipLog.length > 1000) stats.ipLog.shift(); // ограничить размер лога
    await writeJSON(statsFile, stats);

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "server error" });
  }
});

// GET /api/stats — возвращает статистику
app.get("/api/stats", async (req, res) => {
  const stats = await readJSON(statsFile, { visits: 0, ipLog: [] });
  res.json(stats);
});

// POST /api/data — перезаписать data.json (защити в проде!)
app.post("/api/data", async (req, res) => {
  const newData = req.body;
  await writeJSON(dataFile, newData);
  res.json({ status: "ok" });
});

app.listen(PORT, () => console.log(`Backend: http://localhost:${PORT}`));
