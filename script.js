//your JS code here. If required.
let player1 = "";
let player2 = "";
let currentPlayer = "";
let currentSymbol = "X";
let gameOver = false;

document.getElementById("submit").addEventListener("click", function () {
    player1 = document.getElementById("player-1").value.trim();
    player2 = document.getElementById("player-2").value.trim();

    if (player1 === "" || player2 === "") {
        alert("Please enter both names.");
        return;
    }

    // Hide input section and show game board
    document.getElementById("input-area").style.display = "none";
    document.getElementById("game-area").style.display = "block";

    currentPlayer = player1;  
    document.querySelector(".message").textContent = `${currentPlayer}, you're up`;
});


const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("click", function () {
        if (cell.textContent !== "" || gameOver) return;

        cell.textContent = currentSymbol;

        if (checkWinner()) {
            document.querySelector(".message").textContent =
                `${currentPlayer}, congratulations you won!`;
            gameOver = true;
            return;
        }

        switchPlayer();
    });
});


function switchPlayer() {
    if (currentSymbol === "X") {
        currentSymbol = "O";
        currentPlayer = player2;
    } else {
        currentSymbol = "X";
        currentPlayer = player1;
    }

    document.querySelector(".message").textContent =
        `${currentPlayer}, you're up`;
}


function checkWinner() {
    const winPatterns = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;

        const cellA = document.getElementById(a).textContent;
        const cellB = document.getElementById(b).textContent;
        const cellC = document.getElementById(c).textContent;

        return cellA !== "" && cellA === cellB && cellB === cellC;
    });
}
