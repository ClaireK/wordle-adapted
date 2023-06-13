import React, { useEffect } from "react";
import ResultBoard from "./result_board/ResultBoard";
import Keyboard from "./keyboard/Keyboard";
import WonBanner from "./WonBanner";
import LostBanner from "./LostBanner";
import words from "../../data/words.json";
import { getRandomElement } from "../../helpers";
import useGame from "../../hooks/useGame";

const ANSWER_OBJ = getRandomElement(words.golf);
const ANSWER = ANSWER_OBJ.word;

function Game() {
  const { gameStatus, currentGuess, guessList, guessStatusList, handleKey } = useGame(ANSWER);

  useEffect(() => {
    console.log("ANSWER: ", ANSWER);
  }, [])

  useEffect(() => {
    // TODO: Fix multiple calls!!!
    window.addEventListener("keydown", e => handleKey(e.key))

    return () => {
      window.removeEventListener("keydown", e => handleKey(e.key))
    }
  });

  function handleOnKeyboardClick(e) {
    handleKey(e.target.innerHTML);
  }

  //console.log("guessStatusList: ", guessStatusList);

  console.log("currentGuess: ", currentGuess);

  return (
    <main className="game-wrapper">
        <ResultBoard 
          currentGuess={currentGuess} 
          guessStatusList={guessStatusList} 
          guessList={guessList}
          gameStatus={gameStatus}
        />
        <Keyboard 
          handleOnKeyboardClick={handleOnKeyboardClick} 
          gameStatus={gameStatus}
        />
        {gameStatus === "won" && <WonBanner numOfGuesses={guessList.length} />}
        {gameStatus === "lost" && <LostBanner answer={ANSWER.toUpperCase()} />}
    </main>
  )
}

export default Game;