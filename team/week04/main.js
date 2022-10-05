const board = document.querySelector('.board');
const clear = document.querySelector('.clear');
const hide1 = document.getElementById('player1');
const hide2 = document.getElementById('player2');

const player1 = 'X';
const player2 = 'O';
let player = player1



function playerMove(evt) {
    if (evt.target.innerHTML === 'X' || evt.target.innerHTML === 'O') {
        alert('THIS SQUARE IS TAKEN! PICK AGAIN!')
    } else {
    evt.target.innerHTML = player 
    if (player === player1) {
        player = player2;
        hide1.classList.add('hidden');
        hide2.classList.remove('hidden');
    } else {
        player = player1
        hide2.classList.add('hidden');
        hide1.classList.remove('hidden');
    }
}
}

function clearBoard() {
    for (let i =0; i < 9; i++) {
        board.children[i].innerHTML = '';
        player = player1
        hide2.classList.add('hidden');
        hide1.classList.remove('hidden');
    }
}


board.addEventListener('click', playerMove);
clear.addEventListener('click', clearBoard)