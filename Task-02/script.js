// script.js
const gameBoard = document.getElementById('gameBoard');
const cells = document.querySelectorAll('.cell');
const scoreX = document.getElementById('scoreX');
const scoreO = document.getElementById('scoreO');
const resetBtn = document.getElementById('resetBtn');

let currentPlayer = 'X';
// document.body.currentPlayer.style.color = "blue";
let board = ['', '', '', '', '', '', '', '', ''];
let scores = { X: 0, O: 0 };


const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
];

function handleClick(event) {
    const index = event.target.getAttribute('data-index');
    if (board[index] === '') {
        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        if (checkWin()) {
            scores[currentPlayer]++;
            updateScores();
            alert(`Player ${currentPlayer} wins!`);
            resetBoard();
        } else if (board.every(cell => cell !== '')) {
            alert('Draw!');
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
    });
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}

function updateScores() {
    scoreX.textContent = scores.X;
    scoreO.textContent = scores.O;
}

function endGame() {
    resetBoard();
    scores = { X: 0, O: 0 };
    updateScores();
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetBtn.addEventListener('click', endGame);
