import React from "react";
import GameCard from "./GameCard";
import "./GameList.css";

const games = [
  "Space Adventure",
  "Racing Fury",
  "Puzzle Master",
  "Zombie Survival",
  "Dragon Quest",
  "Football Stars"
];

export default function GameList() {
  return (
    <section className="game-container">
      {games.map((game, index) => (
        <GameCard key={index} name={game} />
      ))}
    </section>
  );
}
