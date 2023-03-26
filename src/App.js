import { useState } from 'react';
import { Resetbutton } from './ResetButton';
import { ScoreBoard } from './ScoreBoard';

function Square({value, onSquareClick}) {
  const square = value === "X" ? "box x" : "box o";

  return (
    <button className={square} onClick={onSquareClick}>{value}</button>
  )
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    setSquares(nextSquares);
    const winner = calculateWinner(nextSquares);

    if (winner) {
      if (winner === "X"){
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore })
      } else {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore })
      }
    }

    setXIsNext(!xIsNext);
  }

  const reset = () => {
    setSquares(Array(9).fill(null));
  }

  function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i=0; i<lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
  }

  return (
    <>
      <ScoreBoard scores={scores} />
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=> handleClick(0)} />
        <Square value={squares[1]} onSquareClick={()=> handleClick(1)} />
        <Square value={squares[2]} onSquareClick={()=> handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={()=> handleClick(3)} />
        <Square value={squares[4]} onSquareClick={()=> handleClick(4)} />
        <Square value={squares[5]} onSquareClick={()=> handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={()=> handleClick(6)} />
        <Square value={squares[7]} onSquareClick={()=> handleClick(7)} />
        <Square value={squares[8]} onSquareClick={()=> handleClick(8)} />
      </div>
      <Resetbutton reset={reset} />
    </>
  );
}
