const grid = document.querySelector(".grid");
const SIZE = 16;



for (let i = 0; i < SIZE; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < SIZE; j++) {
        const field = document.createElement("div");
        field.setAttribute("class", "field");
        row.appendChild(field);
        field.addEventListener("mouseover", (e) => {
            console.log('hower')
            e.target.style.backgroundColor = "black"
        })
    }
    grid.appendChild(row);

}