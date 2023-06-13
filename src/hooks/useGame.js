import { useState } from "react";
import { getGuessResult } from "../helpers";

const useGame = (ANSWER) => {

    const [gameStatus, setGameStatus] = useState("in progress"); // "in progress", "won", "lost"
    const [currentGuess, setCurrentGuess] = useState("");
    // Array of submitted guesses
    const [guessList, setGuessList] = useState([]);
    // "correct", "misplaced", "incorrect" evaluation of each letter of submitted guesses
    const [guessStatusList, setGuessStatusList] = useState([]);

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
            return setCurrentGuess((lastGuess) => {
                return lastGuess.slice(0,-1);
            });
        }
        if (formattedKey === "ENTER") {
          if(currentGuess.length === 5) {
            return handleSubmit();
          } else {
            return;
          } 
        }
        if (currentGuess.length < 5) {
          return setCurrentGuess((lastGuess) => {
              return lastGuess + formattedKey;
          });
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

      return { gameStatus, currentGuess, guessList, guessStatusList, handleKey }
}

export default useGame;