const grid = document.querySelector(".grid");
const button = document.querySelector(".change-btn");
let size = 16;

button.addEventListener("mousedown", () => {
    button.setAttribute("class", "change-btn-down")
})

button.addEventListener("mouseup", () => {
    button.setAttribute("class", "change-btn")
})

button.onclick = newBoard

function newBoard() {
    let newVal = prompt("Please enter a whole number less than 100!")
    console.log(Number(newVal))
    if (isNaN(Number(newVal)) || Number(newVal) > 100) newBoard()
    else {
        size = Math.floor(Math.abs(Number(newVal)))
        createBoard()
    }
}


function createBoard () {
    grid.textContent = ""
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let j = 0; j < size; j++) {
            const field = document.createElement("div");
            field.setAttribute("class", "field");
            field.style.backgroundColor = `rgb(${Math.random()*256}, ${Math.random()*256}, ${Math.random()*256})`
            row.appendChild(field);
            field.addEventListener("mouseover", (e) => {
                if (!e.target.style.opacity) tmp = 1
                else tmp = Number(e.target.style.opacity)
                e.target.style.opacity = tmp - 0.1
            })
        }
        grid.appendChild(row);

    }
}

createBoard()