const ROWS_NUMBER = 20;
const COLS_NUMBER = 20;

let table = new Array(ROWS_NUMBER);
let shouldContinue = false;
let desiredGenerationsNumber;
for (let i = 0; i < ROWS_NUMBER; i++) {
  table[i] = new Array(COLS_NUMBER);
}

const tableElement = document.querySelector("#table");
const btnGameElement = document.querySelector("#gameOfLifeController");

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

resetTable();

generateMatrix();

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

function resetTable() {
  for (let i = 0; i < ROWS_NUMBER; i++) {
    for (let j = 0; j < COLS_NUMBER; j++) {
      table[i][j] = false;
      tableElement.rows[i].cells[j].classList.remove("alive");
    }
  }
}

function countNumberOfLiveNeighbors(cellRow, cellCol) {
  let liveNeighbors = 0;

  for (let i = cellRow - 1; i <= cellRow + 1; i++) {
    for (let j = cellCol - 1; j <= cellCol + 1; j++) {
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

function playGame() {
  let neighborsAlive = 0;

  let generationsNumber = 0;

  let interval = setInterval(() => {
    for (let i = 0; i < ROWS_NUMBER; i++) {
      for (let j = 0; j < COLS_NUMBER; j++) {
        neighborsAlive = countNumberOfLiveNeighbors(i, j);

        if (table[i][j] && (neighborsAlive == 2 || neighborsAlive == 3)) {
          table[i][j] = true;
          tableElement.rows[i].cells[j].classList.add("alive");
        } else if (!table[i][j] && neighborsAlive == 3) {
          table[i][j] = true;
          tableElement.rows[i].cells[j].classList.add("alive");
        } else {
          table[i][j] = false;
          tableElement.rows[i].cells[j].classList.remove("alive");
        }
      }
    }
    generationsNumber++;

    if (generationsNumber == desiredGenerationsNumber || !shouldContinue) {
      clearInterval(interval);
      shouldContinue = false;
      btnGameElement.innerHTML = "Start";
    }
  }, 1000);
}
