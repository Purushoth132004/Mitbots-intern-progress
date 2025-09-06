import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>🎮 Game Hub</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Games</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
}
