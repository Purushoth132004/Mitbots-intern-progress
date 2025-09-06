import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import GameList from "./GameList";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <GameList />
      </main>
      <Footer />
    </div>
  );
}

