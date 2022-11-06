import React, { useState, useRef } from "react";
import { useEffect } from "react";
import wordCounter from "./wordCounter";

const App = () => {
  const [time, setTime] = useState("-");
  const [gameRun, setGameRun] = useState(false);
  const [textTyped, setTextTyped] = useState("");
  const [wordsCount, setWordsCount] = useState(0);
  const textAreaRef = useRef(null);
  const startGame = () => {
    setGameRun(true);
    setTime(10);
    setTextTyped("");
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  };
  const saveText = (e) => {
    setTextTyped(e.target.value);
  };

  useEffect(() => {
    if (time > 0 && gameRun) {
      setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time <= 0 && gameRun) {
      setWordsCount(wordCounter(textTyped));
      setGameRun(false);
    }
  }, [time]);

  return (
    <div>
      <h1>Speed typing Game</h1>
      <textarea
        ref={textAreaRef}
        name=""
        id="text-area"
        cols="30"
        rows="10"
        disabled={!gameRun}
        onChange={saveText}
        value={textTyped}
      ></textarea>
      {gameRun && <h4>Time remain: {time}</h4>}
      <button onClick={startGame} disabled={gameRun}>
        Start
      </button>
      {!gameRun && time != "-" && <h1>You typed {wordsCount} words</h1>}
    </div>
  );
};

export default App;
