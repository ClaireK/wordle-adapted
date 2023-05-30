import React from "react";
import Banner from "../banner/Banner";

function LostBanner({ answer }) {
  return (
    <Banner status="lost">
        <p>The correct answer is <strong>{answer}</strong>.</p>
        <p>Better luck next time ✨</p>
    </Banner>
  )
}

export default LostBanner;