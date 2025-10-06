import React, { useRef } from "react";

const Header = () => (
  <header
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: "60px",
      background: "#333",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    }}
  >
    <h2>🌊 Scroll Demo App</h2>
  </header>
);

const Footer = () => (
  <footer
    style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      height: "50px",
      background: "#333",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <p>© 2025 Scroll Demo</p>
  </footer>
);

const ContentSection = ({ children, color }) => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2rem",
      background: color,
      padding: "40px 20px",
      boxSizing: "border-box",
    }}
  >
    {children}
  </div>
);

const InfoBox = ({ title, text }) => (
  <div
    style={{
      background: "#fff",
      color: "#333",
      padding: "20px",
      margin: "10px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      width: "300px",
      textAlign: "center",
    }}
  >
    <h3>{title}</h3>
    <p style={{ fontSize: "1rem" }}>{text}</p>
  </div>
);

const Gallery = () => (
  <div
    style={{
      display: "flex",
      gap: "20px",
      margin: "20px 0",
    }}
  >
    {["🌄", "🏖️", "🌆", "🌌"].map((icon, idx) => (
      <div
        key={idx}
        style={{
          fontSize: "3rem",
          background: "#fff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        }}
      >
        {icon}
      </div>
    ))}
  </div>
);

const HorizontalToVerticalScroll = () => {
  const containerRef = useRef(null);

  const handleWheel = (e) => {
    if (containerRef.current) {
      // prevent default horizontal scroll
      e.preventDefault();

      // Map horizontal scroll (deltaX) -> vertical movement
      containerRef.current.scrollTop += e.deltaX;
    }
  };

  return (
    <div
      onWheel={handleWheel}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          overflowY: "auto",
          scrollBehavior: "smooth",
          marginTop: "60px",
          marginBottom: "50px",
        }}
      >
        <ContentSection color="linear-gradient(135deg, #ff9a9e, #fad0c4)">
          Section 1
        </ContentSection>

        <ContentSection color="linear-gradient(135deg, #a18cd1, #fbc2eb)">
          <h2>Section 2</h2>
          <Gallery />
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <InfoBox title="Card 1" text="This is card one content" />
            <InfoBox title="Card 2" text="This is card two content" />
            <InfoBox title="Card 3" text="This is card three content" />
          </div>
        </ContentSection>

        <ContentSection color="linear-gradient(135deg, #84fab0, #8fd3f4)">
          Section 3
        </ContentSection>

        <ContentSection color="linear-gradient(135deg, #ffecd2, #fcb69f)">
          Section 4
        </ContentSection>
      </div>
    </div>
  );
};

const App = () => (
  <>
    <Header />
    <HorizontalToVerticalScroll />
    <Footer />
  </>
);

export default App;
