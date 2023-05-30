import React from "react";
import Banner from "../banner/Banner";

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status="won">
        <p>
            <strong>Congratulations!</strong>
        </p> 
        <p>
            You got it in <strong> {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`} 🔥</strong>
        </p>
    </Banner>
  )
}

export default WonBanner;