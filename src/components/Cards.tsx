import React from 'react';
import CardItem from './CardItem';
import '../styles/Cards.css';

export default function Cards() {
  return (
    <div id="services" className="cards">
      <h2>Lorem ipsum dolor sit amet consectetur.</h2>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="/images/"
              text="Lorem ipsum dolor sit amet consectetur."
              label="some label"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
