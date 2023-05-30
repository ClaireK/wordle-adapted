import React from "react";
import ResultBoardRow from "./ResultBoardRow";

function ResultBoard({ currentGuess, guessList, guessStatusList, gameStatus }) {
    return (
        <div className="board">
            { 
                Array(6).fill().map((_,i) => (
                    <ResultBoardRow 
                        key={i} 
                        currentGuess={ guessList.length === i ? currentGuess : null} 
                        guessList={guessList[i]} 
                        guessStatus={guessStatusList[i]}
                        hasWon={guessList.length - 1 === i ? gameStatus : null}
                    />
                ))
            }
        </div>
    )

}

export default ResultBoard;