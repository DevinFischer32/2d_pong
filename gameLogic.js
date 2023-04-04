const ball = document.getElementById("ball")
const gameBoard = document.getElementById("gameboard")
const playerOne = document.getElementById("player1")
const playerTwo = document.getElementById("player2")

document.addEventListener('keydown', function (event) {
    if (event.defaultPrevented) {
        return;
    }
    switch (event.key) {
        case "w":
            break;
        case "s":
            console.log("S")
            break;
        case "ArrowUp":
            console.log("Up");
            break;
        case "ArrowDown":
            console.log("Down");
            break;
        default:
            return;
    }
    event.preventDefault()
}, true)