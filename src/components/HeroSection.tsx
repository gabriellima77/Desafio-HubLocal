import React from 'react';
import '../styles/HeroSection.css';

export default function HeroSection() {
  const goDown = ()=> {
    const y = document.querySelector('.hero-container')?.scrollHeight;
    if (y) window.scrollTo(0, y);
  }

  return (
    <section className="hero-container">
      {/* <video src="videos/video.mp4" autoPlay muted loop /> */}
      <h1>Aumente as suas vendas</h1>
      <p>Construindo sua presença na internet!</p>
      <button onClick={goDown} className="bottom-box">
        <div className="next-section">
          <i className="fas fa-sort-down" />
        </div>
      </button>
    </section>
  );
}
