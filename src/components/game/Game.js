import React, { useEffect, useState } from "react";
import ResultBoard from "./result_board/ResultBoard";
import Keyboard from "./keyboard/Keyboard";
import WonBanner from "./WonBanner";
import LostBanner from "./LostBanner";
import words from "../../data/words.json";
import { getRandomElement, getGuessResult } from "../../helpers";

const ANSWER_OBJ = getRandomElement(words.golf);
const ANSWER = ANSWER_OBJ.word;

function Game() {

  const [gameStatus, setGameStatus] = useState("in progress");
  const [currentGuess, setCurrentGuess] = useState("");
  const [guessList, setGuessList] = useState([]);
  const [guessStatusList, setGuessStatusList] = useState([]);

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

  function handleKey(key) {
    const formattedKey = key.toUpperCase();

    const singleCharCheck = RegExp(/^[a-zA-Z]{1,1}$/).test(formattedKey);
    const backspaceCheck = formattedKey === "BACKSPACE";
    const enterCheck = formattedKey === "ENTER";

    // Not a character, ENTER or DELETE? Do nothin!
    if(!singleCharCheck && !backspaceCheck && !enterCheck) {
      return
    } 
    // Do somethin!
    if (formattedKey === "BACKSPACE") {
      return handleDelete();
    }
    if (formattedKey === "ENTER") {
      if(currentGuess.length === 5) {
        return handleSubmit();
      } else {
        return;
      } 
    }
    if (currentGuess.length < 5) {
      let nextGuess = currentGuess;
      return setCurrentGuess(nextGuess += formattedKey);
    }
  }

  function handleSubmit() {
    const answerFormatted = ANSWER.toUpperCase();
    // Set status result for styling
    const currentGuessStatus = getGuessResult(currentGuess, answerFormatted);
    const nextGuessStatusList = [...guessStatusList];  
    
    nextGuessStatusList.push(currentGuessStatus);
    setGuessStatusList(nextGuessStatusList);

    // Set guesses
    const nextGuessList = [...guessList];
    nextGuessList.push(currentGuess);
    setGuessList(nextGuessList);
    setCurrentGuess("");

    if (currentGuess === answerFormatted) {
      return setGameStatus("won");
    }

    if (nextGuessList.length >= 6) {
      return setGameStatus("lost");
    }
  }

  function handleDelete() {
    // Convert to arr
    const nextCurrentGuess = [...currentGuess];
    nextCurrentGuess.pop();
    // Convert back to string
    setCurrentGuess(nextCurrentGuess.join(""));
  }

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
          guessStatusList={guessStatusList}
          gameStatus={gameStatus}
        />
        {gameStatus === "won" && <WonBanner numOfGuesses={guessList.length} />}
        {gameStatus === "lost" && <LostBanner answer={ANSWER.toUpperCase()} />}
    </main>
  )
}

export default Game;