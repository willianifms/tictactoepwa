const result = document.querySelector('.result');

let gameInicio = true;
let jogadorAtual = "X";
let estadoJogo = ["", "", "", "", "", "", "", "", ""];

const vencedor = () => `jogador com ${jogadorAtual} ganhou!`;
const empate = () => `empate!`;
const jogadorAtualTurn = () => `vez do ${jogadorAtual} jogar`;

result.innerHTML = jogadorAtualTurn();

const condicaoVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleDivPlayed(clickedDiv, clickedDivIndex) {
    estadoJogo[clickedDivIndex] = jogadorAtual;
    clickedDiv.innerHTML = jogadorAtual;
}

function condicaoVez() {
    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    result.innerHTML = jogadorAtualTurn();
}

function handleResultValidation() {
    let roundWon = false;
    for(let i = 0; i <= 7; i++) {
        const winCondition = condicaoVitoria[i];
        const a = estadoJogo[winCondition[0]];
        const b = estadoJogo[winCondition[1]];
        const c = estadoJogo[winCondition[2]];
        if(a === '' || b === '' || c === '')
            continue;
        if(a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if(roundWon) {
        result.innerHTML = vencedor();
        gameInicio = false;
        return;
    }

    const roundDraw = !estadoJogo.includes("");
    if(roundDraw) {
        result.innerHTML = empate();
        gameInicio = false;
        return;
    }

    condicaoVez();
}

function handleDivClick(clickedDivEvent) {
    const clickedDiv = clickedDivEvent.target;
    const clickedDivIndex = parseInt(clickedDiv.getAttribute('valueDiv'));

    if(estadoJogo[clickedDivIndex] !== "" || !gameInicio)
        return;

    handleDivPlayed(clickedDiv, clickedDivIndex);
    handleResultValidation();
}

function handleRestartGame() {
    gameInicio = true;
    jogadorAtual = "X";
    estadoJogo = ["", "", "", "", "", "", "", "", ""];
    result.innerHTML = jogadorAtualTurn();
    document.querySelectorAll('.div').forEach(div => div.innerHTML = "");
}


document.querySelectorAll('.div').forEach(div => div.addEventListener('click', handleDivClick));
document.querySelector('.newGame').addEventListener('click', handleRestartGame);