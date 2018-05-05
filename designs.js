// HTML table element
const gridTable = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
document.querySelector('input[type=submit]').addEventListener('click', (event) => {
  event.preventDefault();
  makeGrid();
});

// makeGrid Function
function makeGrid() {
  
  // Empty grid
  gridTable.innerHTML = "";
  
  // Store values from both grid height and width input
  let gridHeight = document.querySelector("#inputHeight").value;
  let gridWidth = document.querySelector("#inputWidth").value;
  
  // Create rows and columns
  for (var r = 0; r < gridHeight; r ++ ) {
    let tableRow = document.createElement('tr');
    gridTable.appendChild(tableRow).className = `row${r}`;
    for (var c = 0; c < gridWidth; c ++) {
      let tableColumn = document.createElement('td');
      gridTable.querySelector(`.row${r}`).appendChild(tableColumn);
    }
  }
};

// Add or remove background color to click table cell
gridTable.addEventListener('click', (event) => {
  const colorInput = document.querySelector("#colorPicker").value;
  if(event.target.classList.contains('clicked')) {
    event.target.removeAttribute("style");
    event.target.classList.remove("clicked");
  } else {
    event.target.style.backgroundColor = colorInput;
    event.target.classList.add("clicked");

  }
});