import { useState } from 'react';
import './App.css';
import Card from './components/Card';

const images = [
  { src: 'images/brook.png' },
  { src: 'images/chopper.png' },
  { src: 'images/franky.png' },
  { src: 'images/luffy.png' },
  { src: 'images/nami.png' },
  { src: 'images/robin.png' },
  { src: 'images/sanji.png' },
  { src: 'images/ussop.png' },
  { src: 'images/zoro.png' },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);

  // to shuffle cards:
  const shuffleCards = () => {
    const shuffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const choice = (card) => {
    console.log(card);
  };

  return (
    <div className="App">
      <h1>Jolly Roger Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} choice={choice} />
        ))}
      </div>
    </div>
  );
}

export default App;
