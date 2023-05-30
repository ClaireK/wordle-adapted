import React from "react";
import ResultBoardCell from "./ResultBoardCell";

function ResultBoardRow({ currentGuess, guessList, guessStatus, hasWon }) {

    if(guessList) {
        return (
            <div className="board-row">
                {
                    guessList.split("").map((letter ,i) => {
                        return (
                            <ResultBoardCell 
                                key={i} 
                                letter={letter}
                                letterStatus={guessStatus ? guessStatus[i].key === letter ? guessStatus[i].status : null : null}
                                hasWon={hasWon}
                            />
                        )
                    })
                }
            </div>
        ) 
    }

    if(currentGuess) {
        let letters = currentGuess.split("");
        return (
            <div className="board-row">
                {
                    letters.map((letter ,i) => (
                        <ResultBoardCell 
                            key={i} 
                            filled={true}
                            letter={letter}
                        />
                    ))
                }
                {[...Array(5 - letters.length)].map((_, i) => (
                    <ResultBoardCell 
                        key={i} 
                        letter=""
                    />
                ))}
            </div>
        ) 
    }


    return (
        <div className="board-row">
            {
                Array(5).fill().map((_,i) => {
                    return (
                    <ResultBoardCell 
                        key={i} 
                        letter=""
                    />
                )})
            }
        </div>
    )

}

export default ResultBoardRow;