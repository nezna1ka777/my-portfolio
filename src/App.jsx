import React from "react";
import "./index.css";
import "./App.css"; // стили с анимациями

function App() {
  return (
    <div className="resume-section" style={{ flexDirection: "column" }}>
      {/* Верхняя часть — фото + контакты */}
      <div
        style={{
          display: "flex",
          gap: "50px",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        {/* Фото */}
        <div className="resume-photo fade-in-left">
          <img
            src={`${import.meta.env.BASE_URL}photo.jpg`}
            alt="Фото"
            className="photo"
            style={{
              width: "300px",
              height: "420px",
              borderRadius: "15px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Контакты */}
        <div
          className="resume-text fade-in-right"
          style={{
            fontSize: "22px",
            marginLeft: "50px",
            flex: 1,
          }}
        >
          <h2>Шамаль Борис Михайлович</h2>
          <p>Город: Екатеринбург</p>
          <p>
            Email:{" "}
            <a href="mailto:b.shamal007@gmail.com">b.shamal007@gmail.com</a>
          </p>
          <p>Телефон: +7 (992) 097-04-85</p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/nezna1ka777">github.com/nezna1ka777</a>
          </p>
          <p>
            Telegram: <a href="https://t.me/nezna_1ka">@nezna_1ka</a>
          </p>
        </div>
      </div>

      {/* Нижняя часть — резюме */}
      <div
        className="resume-text fade-in-bottom"
        style={{ marginTop: "40px", fontSize: "18px", textAlign: "left" }}
      >
        <h3>Цель</h3>
        <p>
          Готов к обучению новым технологиям и инструментам, включая фреймворки,
          базы данных или специализированное ПО, в зависимости от потребностей
          компании. Интересуют позиции начального уровня в IT, аналитике данных,
          технической поддержке и смежных областях.
        </p>

        <h3>Образование</h3>
        <p>МБОУ СОШ №105, г. Екатеринбург (2014–2025)</p>

        <h3>Ключевые навыки</h3>
        <ul>
          <li>
            Python — написание скриптов, автоматизация задач, работа с
            библиотеками
          </li>
          <li>
            Microsoft Office (Word, Excel, PowerPoint) — продвинутый уровень
          </li>
          <li>Немецкий — B2 (свободное общение, чтение технической документации)</li>
          <li>Китайский — начальный уровень</li>
          <li>Анализ больших объёмов информации</li>
          <li>Структурирование данных и решение задач</li>
          <li>Целеустремлённость, инициативность, креативность</li>
          <li>Высокая обучаемость</li>
        </ul>

        <h3>Дополнительная информация</h3>
        <ul>
          <li>Разработка личных проектов на Python (примеры на GitHub)</li>
          <li>Автоматизация задач для оптимизации процессов</li>
          <li>Бег — участие в любительских забегах</li>
          <li>Чтение профессиональной литературы</li>

        </ul>
      </div>
    </div>
  );
}

export default App;
