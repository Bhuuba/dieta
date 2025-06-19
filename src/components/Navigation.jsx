import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navigation">
      {location.pathname !== "/" && (
        <button className="back-button" onClick={() => navigate("/")}>
          ← Назад
        </button>
      )}
    </nav>
  );
};

export default Navigation;
