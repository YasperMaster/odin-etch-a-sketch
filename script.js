const container = document.querySelector("#container");
const sizeBtn = document.querySelector("#sizeBtn");
let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.addEventListener("mouseover", (event) => {
      square.classList.add("coloredSquare");
    });
  }
}

/*
size button function not working yet

sizeBtn.addEventListener("click", (event) => {
  gridSize = prompt("Enter the size of the grid:\n(100x100 is the max)");
  if (gridSize != null || gridSize != "") {
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        container.removeChild(square);
      }
    }
  }
});
*/
