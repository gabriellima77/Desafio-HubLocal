import React from 'react';

interface cardItemProps {
  src: string;
  text: string;
  label: string;
}

export default function CardItem({ src, text, label }: cardItemProps) {
  return (
    <>
      <li className="cards-item">
        <div className="cards-item-link">
          <figure className="cards-item-pic-wrap" data-category={label}>
            <img src={src} alt={label} className="cards-item-img" />
          </figure>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}
