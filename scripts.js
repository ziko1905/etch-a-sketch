const body = document.querySelector("body")
const board = document.querySelector(".whiteboard");
const BOARD_HEIGHT = 500;
const BOARD_WIDTH = 1200;
const ctx = board.getContext("2d");

let curX = BOARD_WIDTH / 2;
let curY = BOARD_HEIGHT / 2;

// const stopUp = window.setInterval(100, drawUp);
// const stopDown = window.setInterval(100, drawDown);
// const stopLeft = window.setInterval(100, drawLeft);
// const stopRight = window.setInterval(100, drawRight);

board.setAttribute("width", BOARD_WIDTH)
board.setAttribute("height", BOARD_HEIGHT)
ctx.fillStyle = "black";


body.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp") drawUp()
    else if (e.key == "ArrowDown") setTimeout(drawDown, 10)
    else if (e.key == "ArrowLeft") setTimeout(drawLeft, 10)
    else if (e.key == "ArrowRight") setTimeout(drawRight, 10)
    
})


function drawUp() {
    if (curY > 0) curY--
    ctx.fillRect(curX, curY, 1, 1)
}

function drawDown() {
    if (curY < BOARD_HEIGHT) curY++
    ctx.fillRect(curX, curY, 1, 1)
}

function drawLeft() {
    if (curX > 0) curX--
    ctx.fillRect(curX, curY, 1, 1)
}

function drawRight() {
    if (curX < BOARD_WIDTH) curX++
    ctx.fillRect(curX, curY, 1, 1)
}


