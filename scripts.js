const board = document.querySelector(".whiteboard");
const BOARD_HEIGHT = 500;
const BOARD_WIDTH = 1200;
const ctx = board.getContext("2d");

board.setAttribute("width", BOARD_WIDTH)
board.setAttribute("height", BOARD_HEIGHT)


ctx.fillStyle = "black";
ctx.fillRect(100, 100, 1, 1)
ctx.fillRect(20, 100, 10, 10)



