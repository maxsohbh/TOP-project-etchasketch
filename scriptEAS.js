
const grid = document.querySelector("#grid-container")
const reset = document.querySelector("#reset")
const resize = document.querySelector("#resize")

let len = 20; //default value
window.onload = makeGrid(len);

resize.addEventListener("click", (e) => {
    clearGrid();
    changeSize();
})

reset.addEventListener('click', function () {
    clearGrid();
    makeGrid(len)
})

function makeGrid(length) {
    grid.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
    for (let i = 0; i < length ** 2; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
        gridBox.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = `red`;
        });
        grid.appendChild(gridBox);
    }
}

function changeSize() {
    let size = document.querySelector("#size").value;
    makeGrid(size);
}

function clearGrid() {
    const gridArray = Array.from(grid.childNodes);
    gridArray.forEach((unit) => {
        grid.removeChild(unit);
    })
}

function max() {
    let numbers = document.querySelector("#size");
    let maxNumber = 40;
    numbers.addEventListener("input", function (e) {
        if (this.value > maxNumber) {
            alert("Maximum value is 40");
            this.value = maxNumber;
        }
    })
}
window.onload = max();