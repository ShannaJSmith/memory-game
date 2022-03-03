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
  const [turns, setTurns] = useState(0);

  // to shuffle cards:
  const shuffleCards = () => {
    const shuffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };
  console.log('cards:', cards, 'turns:', turns);

  return (
    <div className="App">
      <h1>Jolly Roger Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
