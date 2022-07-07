import React, { useState } from "react";
import Cell from "./Cell";
// import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

const Board = () => {
  const [currentBoard, changeBoard] = useState()
    const makeBoard = ( nrows = 5, ncols=5) => {
      const board = [];
      for (let row = 0; row < nrows; row++) {
        const row = [];
        for (let col = 0; col < ncols; col++) {
          row.push('light')
        }
        board.push(row);
      }
      return board;
    }
    const newBoard = () => { changeBoard(makeBoard()) }

    return (
    <div>
      <button onClick= {newBoard}>start game</button>
      <table> {currentBoard} </table>

    </div>
  )
}

// function Board({ nrows, ncols, chanceLightStartsOn }) {
//   const [board, setBoard] = useState(createBoard());
//   /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
//     return (

//       <div>
//         <button onClick = {createBoard}>New Board</button>
//         <table className="Board">
//           <tbody>{createBoard} </tbody>
//         </table>
//       </div>
//     );

//   function createBoard() {
//     let board = [];
//     board.push([]);
//     for (let i = 0; i < 5; i++) {
//       board[0].push('light');
//       console.log(board)
//     }
//     return board;
//   }

//   function hasWon() {
//     // TODO: check the board in state to determine whether the player has won.
//   }

//   function flipCellsAround(coord) {
//     setBoard(oldBoard => {
//       const [y, x] = coord.split("-").map(Number);

//       const flipCell = (y, x, boardCopy) => {
//         // if this coord is actually on board, flip it

//         if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
//           boardCopy[y][x] = !boardCopy[y][x];
//         }
//       };

//       // TODO: Make a (deep) copy of the oldBoard

//       // TODO: in the copy, flip this cell and the cells around it

//       // TODO: return the copy
//     });
//   }

//   // if the game is won, just show a winning msg & render nothing else

//   // TODO

//   // make table board

//   // TODO
// }

export default Board;
