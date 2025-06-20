import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { antonio } from "../data/antonio";
import { maria } from "../data/maria";
import { estiva } from "../data/estiva";

const DayMenu = () => {
  const { person } = useParams();
  const [today, setToday] = useState(
    new Date().toLocaleString("uk-UA", { weekday: "long" })
  );
  const [currentTime, setCurrentTime] = useState(new Date());

  // Оновлюємо день кожну хвилину
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const newDay = now.toLocaleString("uk-UA", { weekday: "long" });
      setCurrentTime(now);

      if (today !== newDay) {
        setToday(newDay);
      }
    }, 60000); // перевіряємо кожну хвилину

    return () => clearInterval(timer);
  }, [today]);

  const getPerson = () => {
    const normalizedPerson = person.toLowerCase();
    switch (normalizedPerson) {
      case "antonio-giacomo":
      case "giacomo":
      case "antonio":
        return antonio;
      case "maria-debora":
      case "maria":
      case "debora":
        return maria;
      case "antonio-lorenzo":
      case "lorenzo":
        return estiva;
      default:
        return null;
    }
  };

  const selectedPerson = getPerson();
  const todayMenu = selectedPerson?.week[capitalizeFirstLetter(today)];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (!selectedPerson) {
    return (
      <div className="day-menu">
        <h2>Помилка: користувача не знайдено</h2>
        <p>Спробуйте один з цих варіантів:</p>
        <ul className="error-list">
          <li>1. Antonio Giacomo (antonio-giacomo)</li>
          <li>2. Maria Debora (maria-debora)</li>
          <li>3. Antonio Lorenzo (antonio-lorenzo)</li>
        </ul>
      </div>
    );
  }

  if (!todayMenu) {
    return (
      <div className="day-menu">
        <h2>
          Меню для {selectedPerson.name} на {today} не знайдено
        </h2>
      </div>
    );
  }

  const mealOrder = ["сніданок", "перекус", "обід", "перекус2", "вечеря"];

  // Форматуємо час
  const timeString = currentTime.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="day-menu">
      <h1>Меню для {selectedPerson.name}</h1>
      <h2>на {today}</h2>
      <p className="current-time">Поточний час: {timeString}</p>
      <div className="meals-list">
        {mealOrder.map(
          (mealType) =>
            todayMenu[mealType] && (
              <div key={mealType} className="meal-item">
                <h3>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h3>
                <p>{todayMenu[mealType]}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default DayMenu;
