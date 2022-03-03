import React from 'react';
import './Cards.css';

const Cards = ({ cards }) => {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div>
            <img className="front" src={card.src} alt="front" />
            <img className="back" src="images/cover.png" alt="back" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;