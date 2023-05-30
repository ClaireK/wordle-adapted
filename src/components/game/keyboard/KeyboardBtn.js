import React from "react";

function KeyboardBtn({ children, handleOnKeyboardClick, gameStatus }) {
    return (
        <button 
            onClick={handleOnKeyboardClick}
            disabled={gameStatus !== "in progress"}
        >
            {children}
        </button>
    )

}

export default KeyboardBtn;