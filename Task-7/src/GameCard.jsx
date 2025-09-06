import React from "react";
import "./GameCard.css";

export default function GameCard({ name }) {
  return (
    <div className="game-card">
      <h2>{name}</h2>
      <button>Explore Game</button>
    </div>
  );
}
