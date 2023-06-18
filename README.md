# Readme

This project is a very basic implementation of [Conway's Game of Life](https://pt.wikipedia.org/wiki/Jogo_da_vida) in Vanilla JavaScript, HTML and CSS. It has a 20 x 20 grid of cells that can be selected by the user. check the [How to play](#how-to-play) section below for more information.

This was coded by Isadora G. Ferreira (Enrollment Number 202035017) for the class of Formal Languages and Automaton (Linguagens Formais e Autômatos) of the semester 2023.1 (DCC063) in the Federal University of Juiz de Fora (UFJF), alongside with Gabriela Machado Gazola (Enrollment Number 201865162AB).

The algorithm used is based on [Geek for Geek's Program for Conway's Game Of Life implementation](https://www.geeksforgeeks.org/program-for-conways-game-of-life/), with the necessary changes to use the browser's DOM and JS functions.

## How to run

To run this project, download the files and open the `index.html` file in your browser. You can also access the [GitHub Pages](https://isa56.github.io/game-of-life-js/) of this project.

## How to play

Select any number of cells in the grid and click the `Start` button to see the "game" running indefinitely. If you want to, you can type the number of generations you want to see before the game stops in the input beside the start button. You can also click the "Stop" button to stop the game at any time, however, it will end in the generation it is processing.

## The Conway's Game of Life Rules

The game follows simple rules used by the automata:
1. Any live cell with fewer than two live neighbors dies in the next generation, as it is isolated.
2. Any live cell with exactly three live neighbors lives in the next generation, as it was born form them.
3. Any live cell with more than three live neighbors dies in the next generation, as it is overpopulated.
4. Any live cell with two or three neighbors lives in the next generation, as it is in a balanced environment.

## The Automata implementation

The game run on two simple functions: one that defines the number of live neighbors around a cell, and another one that applies the rules to the grid. This second function calls the first one, and is responsible for the "game loop", which is checking every cell in the grid a certain number of iterations, defined by the user in the UI.

It is a cellular automata because it has states that are changed in each iteration, and the next state of each cell depends on the current state of the cell and its neighbors. The states are the cells being alive or dead, and the neighbors are the cells around it.

### Thank you for trying this project!

![Glider's states animation](https://github.com/isa56/game-of-life-js/blob/main/gameoflife.gif)