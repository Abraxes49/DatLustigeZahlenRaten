let zufallszahl;
let upperLimit = 100;
let guessedNumber;
let tries;

function startGuessNumber() {
    zufallszahl = Math.random() * 100;
    zufallszahl = Math.ceil(zufallszahl);
    console.log(zufallszahl)
    document.getElementById("game-text2").innerText = "Rate eine Zahl zwischen 0 und 100";

}

function checkInput() {

    if (zufallszahl == null)
    {
        return;
    }
    guessedNumber = document.getElementById("input").value;
    document.getElementById("game-text1").innerText = guessedNumber;
    if (guessedNumber == zufallszahl)
    {
        document.getElementById("game-text2").innerText= "Winner winner chicken Dinner"
    }
    else if (guessedNumber > zufallszahl)
    {
        document.getElementById("game-text2").innerText= "Deine Zahl ist zu groß"
    }
    else if (guessedNumber < zufallszahl)
    {
        document.getElementById("game-text2").innerText= "Deine Zahl ist zu klein"
    }

    return false;
}
