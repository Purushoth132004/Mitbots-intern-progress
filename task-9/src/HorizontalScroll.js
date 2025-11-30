import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HorizontalScroll.css";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    const totalScrollWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.to(container, {
      x: -(totalScrollWidth - viewportWidth),
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        pin: true,
        scrub: 1,
        end: () => `+=${totalScrollWidth - viewportWidth}`,
      },
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  const cards = Array.from({ length: 10 }, (_, i) => ({
    title: `Card ${i + 1}`,
    img: `https://picsum.photos/seed/${i + 1}/800/400`,
    text: `This is the description for card ${i + 1}.`,
  }));

  return (
    <section className="horizontal-section" ref={wrapperRef}>
      <div className="horizontal-container" ref={containerRef}>
        {cards.map((card, idx) => (
          <div className="card" key={idx}>
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalScroll;
