const word = "table";
const N_LETTERS = 5;
const letterElements = document.querySelectorAll(".letter-guess");
let attemptsCounter = document.querySelector(".counter-number");
let text = document.querySelector(".counter-text");
let count = 6;
attemptsCounter.innerHTML = count;
function onChange(event) {
    const wordGuess = event.target.value;
    if (wordGuess.length != N_LETTERS) {
        alert(`A word should include ${N_LETTERS} letters`);
    } else {
        let wordAr = Array.from(wordGuess);
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l);
        const colors = wordAr.map((l, i) => {
            let index = word.indexOf(l);
            let res = 'red';
            if (index > -1) {
                res = index == i ? 'green' : 'yellow';
            }
            return res;
        })
        colors.forEach((c, i) => letterElements[i].style.color=c);
    if (wordGuess == word) {
        text.innerHTML = "Congratulations - you have guessed word";
        text.style.color = 'green';
        attemptsCounter.innerHTML = "";
    }
        else if (wordGuess != word && count > 1) {
            count--;
            attemptsCounter.innerHTML = count;
    }   else if (wordGuess != word && count <= 1){
            text.innerHTML = "Sorry, your guess trials are ended up";
            text.style.color = 'red';
            attemptsCounter.innerHTML = "";
    } 
}
}