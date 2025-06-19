import React from "react";
import { useNavigate } from "react-router-dom";
import { antonio } from "../data/antonio";
import { maria } from "../data/maria";
import { estiva } from "../data/estiva";

const PersonSelector = () => {
  const navigate = useNavigate();
  const people = [
    { ...antonio, displayName: "Antonio Junior" },
    { ...maria, displayName: "Maria Debora" },
    { ...estiva, displayName: "Естіва" },
  ];

  const handlePersonClick = (person) => {
    const normalizedName = person.name.toLowerCase();
    navigate(`/menu/${normalizedName}`);
  };

  return (
    <div className="person-selector">
      <h1>Оберіть дієту</h1>
      <div className="people-grid">
        {people.map((person) => (
          <button
            key={person.name}
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
