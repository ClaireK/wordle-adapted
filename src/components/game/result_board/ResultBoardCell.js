import React from "react";

function ResultBoardCell({ letter, filled, letterStatus, hasWon }) {
    const winner = hasWon === "won" && letterStatus === "correct" ? "winner" : ""; 
    return (
        <div className={`board-cell ${filled ? "filled" : ""} ${letterStatus ? "validated" : ""} ${letterStatus ? letterStatus : ""} ${winner} `}>{letter}</div>
    )

}

export default ResultBoardCell;