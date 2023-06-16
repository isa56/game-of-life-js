# Readme

This project is a very basic implementation of [Conway's Game of Life](https://pt.wikipedia.org/wiki/Jogo_da_vida) in Vanilla JavaScript, HTML and CSS. It has a 20 x 20 grid of cells that can be select by the user. check the [How to play](#how-to-play) section below for more information.

This was coded by Isadora G. Ferreira (Enrollment Number 202035017) for the class of Formal Languages and Automaton (Linguagens Formais e Autômatos) of the semester 2023.1 (DCC063) in the Federal University of Juiz de Fora (UFJF).

## How to run

To run this project, you just need to open the `index.html` file in your browser. You can also access the [GitHub Pages](https://isadoragf.github.io/game-of-life/) of this project.

## How to play

Select any number of cells in the grid and click the "Start" button to see the "game" running indefinitely. If you want to, you can type the number of generations you want to see before the game stops in the input beside the start button. You can also click the "Stop" button to stop the game at any time, however, it will end in the generation it is processing.

## The Conway's Game of Life Rules

The game follows simple rules used by the automata:
1. Any live cell with fewer than two live neighbours dies in the next generation, as it is isolated.
2. Any live cell with exactly three live neighbours lives in the next generation, as it was born form them.
3. Any live cell with more than three live neighbours dies in the next generation, as it is overpopulated.
4. Any live cell with two or three neighbours lives in the next generation, as it is in a balanced environment.

<!-- ## The Automata implementation -->

