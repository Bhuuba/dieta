import React from "react";
import { useNavigate } from "react-router-dom";
import { antonio } from "../data/antonio";
import { maria } from "../data/maria";
import { estiva } from "../data/estiva";

const PersonSelector = () => {
  const navigate = useNavigate();

  // Порядок відображення: 1. Antonio Giacomo, 2. Maria Debora, 3. Antonio Lorenzo
  const people = [
    { ...antonio, displayName: "Antonio Giacomo", urlName: "antonio-giacomo" },
    { ...maria, displayName: "Maria Debora", urlName: "maria-debora" },
    { ...estiva, displayName: "Antonio Lorenzo", urlName: "antonio-lorenzo" },
  ];

  const handlePersonClick = (person) => {
    navigate(`/menu/${person.urlName}`);
  };

  return (
    <div className="person-selector">
      <h1>Оберіть дієту</h1>
      <div className="people-grid">
        {people.map((person) => (
          <button
            key={person.displayName}
            className="person-card"
            onClick={() => handlePersonClick(person)}
          >
            <h2>{person.displayName}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PersonSelector;
