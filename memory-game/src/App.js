import { useState } from 'react';
import './App.css';

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
  { src: 'images/whitebeard.png' },
  { src: 'images/mihawk.png' },
];

function App() {
  const [cards, setCards] = useState([]);

  // to shuffle cards:
  const shuffleCards = () => {
    const shuffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
  };

  return (
    <div className="App">
      <h1>Jolly Roger Memory Game</h1>
      <button>New Game</button>
    </div>
  );
}

export default App;
