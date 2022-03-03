import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

const images = [
  { src: 'images/brook.png', matched: false },
  { src: 'images/chopper.png', matched: false },
  { src: 'images/franky.png', matched: false },
  { src: 'images/luffy.png', matched: false },
  { src: 'images/nami.png', matched: false },
  { src: 'images/robin.png', matched: false },
  { src: 'images/sanji.png', matched: false },
  { src: 'images/ussop.png', matched: false },
  { src: 'images/zoro.png', matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // to shuffle cards:
  const shuffleCards = () => {
    const shuffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };
  // to make a card selection
  const choice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  // compare selected cards
  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.src === secondChoice.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstChoice.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        reset();
      } else {
        setTimeout(() => reset(), 2000);
      }
    }
  }, [firstChoice, secondChoice]);

  // reset choices and increase turn count

  const reset = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <div className="App">
      <h1>Jolly Roger Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            choice={choice}
            flipped={
              card === firstChoice || card === secondChoice || card.matched
            }
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
