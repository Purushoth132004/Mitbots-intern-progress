import React from "react";
import HorizontalScroll from "./HorizontalScroll";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="hero">
        <h1>Welcome to My Page</h1>
        <p>Scroll down to see the magic happen ✨</p>
      </section>

      <HorizontalScroll />

      <section className="footer">
        <h2>Thanks for scrolling!</h2>
        <p>Built with ❤️ using React and GSAP</p>
      </section>
    </div>
  );
}

export default App;
