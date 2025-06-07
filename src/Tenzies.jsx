import "./Tenzies.css";
import Die from "./Die";
import { nanoid } from "nanoid";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

import { useState } from "react";

export default function Tenzies() {
  const [dice, setDice] = useState(() => generateAllNewDice());

  function generateAllNewDice() {
    return Array.from({ length: 10 }, () => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value) 

  function held(id) {
    setDice((prevDie) => {
      return prevDie.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  function rollDice() {
    setDice((prevDie) => {
      return prevDie.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.ceil(Math.random() * 6) };
      });
    });
  }

  const allDieElement = dice.map((die) => {
    return (
      <Die
        isHeld={die.isHeld}
        key={die.id}
        held={() => held(die.id)}
        value={die.value}
      />
    );
  });

  return (
    <>
      <main>
        {gameWon && <Fireworks autorun={{ speed: 2 }} />}
        <header>
          <h1>Tenzies</h1>
          <img src="/public/dice.png" alt="" />
          <p>
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </header>
        <section>{allDieElement}</section>
        {gameWon ? <button onClick={rollDice} className="roll">New Game</button> :<button onClick={rollDice} className="roll">Roll</button>}
      </main>
    </>
  );
}
