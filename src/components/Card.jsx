import React from 'react';
import './Card.css';

const Card = ({ card, choice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      choice(card);
    }
  };
  return (
    <div className="card" key={card.id}>
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.src} alt="front" />
        <img
          className="back"
          src="images/cover.png"
          onClick={handleClick}
          alt="back"
        />
      </div>
    </div>
  );
};

export default Card;
