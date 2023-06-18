const ROWS_NUMBER = 20;
const COLS_NUMBER = 20;

// Create Array of ROWS
let table = new Array(ROWS_NUMBER);
// Values from DOM
let shouldContinue = false;
let desiredGenerationsNumber;

// Create Arrays of COLUMNS to create a matrix
for (let i = 0; i < ROWS_NUMBER; i++) {
  table[i] = new Array(COLS_NUMBER);
}

// DOM Elements used
const tableElement = document.querySelector("#table");
const tableCellsElement = document.querySelectorAll("td");

const btnGameElement = document.querySelector("#gameOfLifeControllerBtn");
const resetBtnElement = document.querySelector("#resetBtn");
const modalOpenerElement = document.querySelector("#openModalBtn");
const modalCloserElement = document.querySelectorAll("#closeModalBtn");

// Add event listener to the button that opens the modal
modalOpenerElement.addEventListener("click", () => {
  console.log(document.querySelector("#modal"));
  document.querySelector("#modal").classList.add("open");
});

// Add event listener to everything that closes the modal (button, X and outside click)
modalCloserElement.forEach((el) =>
  el.addEventListener("click", () => {
    document.querySelector("#modal").classList.remove("open");
  })
);

// Add event listener to each cell that is clicked by the user
for (let i = 0; i < ROWS_NUMBER; i++) {
  for (let j = 0; j < COLS_NUMBER; j++) {
    let cell = tableElement.rows[i].cells[j];
    cell.addEventListener("click", () => {
      if (cell.classList.contains("alive")) {
        cell.classList.remove("alive");
        table[i][j] = false;
      } else {
        cell.classList.add("alive");
        table[i][j] = true;
      }
    });
  }
}

// Add event listener to the button that starts the game
btnGameElement.addEventListener("click", () => {
  shouldContinue = !shouldContinue;
  desiredGenerationsNumber = Number(
    document.querySelector("#generations").value
  );
  if (shouldContinue) {
    btnGameElement.innerHTML = "Stop";
    playGame();
  } else {
    btnGameElement.innerHTML = "Start";
  }
});

resetBtnElement.addEventListener("click", resetTable);

// Resets the game
resetTable();

// generateMatrix();

// Debug function to generate a random matrix and test the other functions
function generateMatrix() {
  for (let i = 0; i < ROWS_NUMBER; i++) {
    for (let j = 0; j < COLS_NUMBER; j++) {
      table[i][j] = Math.floor(Math.random() * 2) == 1;
      if (table[i][j]) {
        tableElement.rows[i].cells[j].classList.add("alive");
      }
    }
  }
}

// Resets the matrix and the table
function resetTable() {
  for (let i = 0; i < ROWS_NUMBER; i++) {
    for (let j = 0; j < COLS_NUMBER; j++) {
      table[i][j] = false;
      tableElement.rows[i].cells[j].classList.remove("alive");
    }
  }
}

// Counts the number of live neighbors of a cell
function countNumberOfLiveNeighbors(cellRow, cellCol) {
  let liveNeighbors = 0;

  // Goes into each neighbor of the cell
  for (let i = cellRow - 1; i <= cellRow + 1; i++) {
    for (let j = cellCol - 1; j <= cellCol + 1; j++) {
      // Ignores the cell itself and the out of bounds cells
      if (
        i < 0 ||
        j < 0 ||
        i >= ROWS_NUMBER ||
        j >= COLS_NUMBER ||
        (i == cellRow && j == cellCol)
      ) {
        continue;
      }
      if (table[i][j]) {
        liveNeighbors++;
      }
    }
  }

  return liveNeighbors;
}

// Main game loop
function playGame() {
  let neighborsAlive = 0;
  // Creates a copy of the matrix to store the new generation (to avoid changing the current generation while it's still been processed)
  let newTable = table.map((arr) => arr.slice());

  let generationsNumber = 0;

  // Main loop, processes the generations each second
  let interval = setInterval(() => {
    for (let i = 0; i < ROWS_NUMBER; i++) {
      for (let j = 0; j < COLS_NUMBER; j++) {
        neighborsAlive = countNumberOfLiveNeighbors(i, j);

        if (table[i][j] && (neighborsAlive == 2 || neighborsAlive == 3)) {
          // cell keeps living
          newTable[i][j] = true;
          tableElement.rows[i].cells[j].classList.add("alive");
        } else if (!table[i][j] && neighborsAlive == 3) {
          // cell is born
          newTable[i][j] = true;
          tableElement.rows[i].cells[j].classList.add("alive");
        } else {
          // cell dies by overcrowding or underpopulation
          newTable[i][j] = false;
          tableElement.rows[i].cells[j].classList.remove("alive");
        }
      }
    }

    // Copies the new generation to the current generation
    table = newTable.map((arr) => arr.slice());

    // Increments the number of generations processed and stops the loop if the desired number of generations is reached
    generationsNumber++;
    if (generationsNumber == desiredGenerationsNumber || !shouldContinue) {
      clearInterval(interval);
      shouldContinue = false;
      btnGameElement.innerHTML = "Start";
    }
  }, 1000);
}
