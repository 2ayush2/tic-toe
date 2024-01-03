import { useState } from "react";
import Square from "../square";
import "./board.css";

function Board() {
  const [state, setstate] = useState(Array(9).fill(null));
  const [isSquare, setSquare] = useState(true);
  const checkWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let data of winner) {
      const [a, b, c] = data;
      if (state[a] !== null && state[a] == state[b] && state[b] == state[c]) {
        return true;
      }
    }
    return false;
  };
  const finalValue = checkWinner();
  const handleClick = (index) => {
    var copyState = [...state];

    copyState[index] = isSquare ? "0" : "X";
    console.log("Copystate", copyState[index]);
    setstate(copyState);
    setSquare(!isSquare);
  };
  const handlearray = () => {
    setstate(Array(9).fill(null));
  };

  return (
    <div className="board-wrapper">
      {finalValue ? (
        <>
          {checkWinner} won the game !
          <button onClick={handlearray}>Reset</button>
        </>
      ) : (
        <>
          <h4>{isSquare ? "X" : "0"}</h4>
          <div className="row-content">
            <Square value={state[0]} onClick={() => handleClick(0)} />
            <Square value={state[1]} onClick={() => handleClick(1)} />
            <Square value={state[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="row-content">
            <Square value={state[3]} onClick={() => handleClick(3)} />
            <Square value={state[4]} onClick={() => handleClick(4)} />
            <Square value={state[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="row-content">
            <Square value={state[6]} onClick={() => handleClick(6)} />
            <Square value={state[7]} onClick={() => handleClick(7)} />
            <Square value={state[8]} onClick={() => handleClick(8)} />
          </div>
        </>
      )}
    </div>
  );
}

export default Board;
