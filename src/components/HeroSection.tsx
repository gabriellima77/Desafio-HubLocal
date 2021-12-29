import React from 'react';
import Button from './Button';
import '../styles/HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-container">
      <video src="./" autoPlay muted loop />
      <h1>
        Lorem ipsum.
      </h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="hero-btns">
        <Button
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          type="button"
          onClick={() => console.log(1)}
        >
          Teste
        </Button>
      </div>
    </section>
  );
}
