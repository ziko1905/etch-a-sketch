const board = document.querySelector(".whiteboard");
const BOARD_HEIGHT = 500;
const BOARD_WIDTH = 1200;
const ctx = board.getContext("2d");

const curX = 600;
const curY = 250;

// const stopUp = window.setInterval(100, drawUp);
// const stopDown = window.setInterval(100, drawDown);
// const stopLeft = window.setInterval(100, drawLeft);
// const stopRight = window.setInterval(100, drawRight);

board.setAttribute("width", BOARD_WIDTH)
board.setAttribute("height", BOARD_HEIGHT)
ctx.fillStyle = "black";

ctx.fillRect(curX, curY, 1, 1)



