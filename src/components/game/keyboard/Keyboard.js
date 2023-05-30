import React, { useEffect, useState } from "react";
import KeyboardRow from "./KeyboardRow";
import keyboard from "../../../data/keyboard.json"

function Keyboard({ handleOnKeyboardClick, guessStatusList, gameStatus }) {

  const [rowOne, setRowOne] = useState([]);
  const [rowTwo, setRowTwo] = useState([]);
  const [rowThree, setRowThree] = useState([]);

  // TODO: Add used keys logic!
  // TODO: Update render perf

  useEffect(() => {
    function createRows() {
      const nextRowOne = [...rowOne];
      const nextRowTwo = [...rowTwo];
      const nextRowThree = [...rowThree];
  
      keyboard.letters.map(({ key }, i) => {     
        if (i <= 9) {
          nextRowOne.push(key);
          return setRowOne(nextRowOne);
        } else if( i > 9 && i <= 18) {
          nextRowTwo.push(key);
          return setRowTwo(nextRowTwo);
        } else {
          nextRowThree.push(key);
          return setRowThree(nextRowThree);
        }
      })
    }

    if(rowOne.length === 0) {
      createRows()
    } else {
      return
    }
  },[rowOne, rowTwo, rowThree]);

  return (
    <div className="keyboard-wrapper">
      {
        <>
          <KeyboardRow 
            guessStatus={guessStatusList} 
            keys={rowOne} 
            handleOnKeyboardClick={handleOnKeyboardClick}
            gameStatus={gameStatus} 
          />
          <KeyboardRow 
            guessStatus={guessStatusList} 
            keys={rowTwo} 
            spacer={true} 
            handleOnKeyboardClick={handleOnKeyboardClick}
            gameStatus={gameStatus}  
          />
          <KeyboardRow 
            guessStatus={guessStatusList} 
            keys={rowThree} 
            handleOnKeyboardClick={handleOnKeyboardClick} 
            gameStatus={gameStatus} 
          />
        </>
      }
    </div>
  )
}

export default Keyboard;