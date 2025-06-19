import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { estiva } from "./data/estiva";
import { maria } from "./data/maria";
import { antonio } from "./data/antonio";
import Navigation from "./components/Navigation";
import PersonSelector from "./components/PersonSelector";
import DayMenu from "./components/DayMenu";
import "./styles.css";

const people = [estiva, maria, antonio];

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<PersonSelector />} />
            <Route path="/menu/:person" element={<DayMenu />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
