export function getRandomElement(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

export function getGuessResult(guess, answer) {
    let guessArr = [...guess];
    let answerArr = [...answer];
    let guessResultObj = guessArr.map(letter => {
        return { key: letter, status: "incorrect" }
    })

    guessResultObj.forEach((letter, i) => {
        if(answerArr[i] === letter.key) {
            guessResultObj[i].status = "correct"
            answerArr[i] = null // Avoid double matching
        }
    })

    guessResultObj.forEach((letter, i) => {
        if(answerArr.includes(letter.key) && letter.status !== "correct") {
            guessResultObj[i].status = "misplaced"
            answerArr[answerArr.indexOf(letter.key)] = null // Avoid double matching
        }
    })

    return guessResultObj;
}