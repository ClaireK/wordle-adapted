import React, { memo } from "react";
import KeyboardBtn from "./KeyboardBtn";

function KeyboardRow({ keys, spacer = false, handleOnKeyboardClick, gameStatus }) {
    return (
        <div className="keyboard-row">
        { spacer && <div className="keyboard-spacer"></div> }
        {
            keys.map((key , i) => {
                return (
                    <KeyboardBtn 
                        key={i} 
                        handleOnKeyboardClick={handleOnKeyboardClick}
                        gameStatus={gameStatus}
                    >
                            {key}
                    </KeyboardBtn>
                )
            })
        }
        { spacer && <div className="keyboard-spacer"></div> }
        </div>
    )

}

export default memo(KeyboardRow);