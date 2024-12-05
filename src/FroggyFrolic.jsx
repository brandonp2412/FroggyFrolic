import React, { useState, useCallback, useRef, useEffect } from "react";
import "./FroggyFrolic.css";
import GameOver from "./GameOver";
import YouWon from "./YouWon";

const GRID_WIDTH = 5;
const GRID_HEIGHT = 5;
const CELL_SIZE = 60;

function Frog({ position }) {
  return (
    <div
      className="frog"
      style={{ left: position.x * CELL_SIZE, top: position.y * CELL_SIZE }}
    >
      🐸
    </div>
  );
}

function LilyPad({ position }) {
  return (
    <div
      className="lily-pad"
      style={{ left: position.x * CELL_SIZE, top: position.y * CELL_SIZE }}
    >
      🍃
    </div>
  );
}

function FroggyFrolic() {
  const [frogPosition, setFrogPosition] = useState({ x: 0, y: 1 });
  const [board, setBoard] = useState([[]]);
  const [gameOver, setGameOver] = useState(false);
  const [youWon, setYouWon] = useState(false);
  const [seconds, setSeconds] = useState(10);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }

    setGameOver(true);
    setLosses(losses + 1);
  }, [seconds]);

  const debounce = (func, delay) => {
    return (...args) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedCheck = useCallback(
    debounce((position) => {
      const dead = !board[position.x][position.y];
      if (dead) {
        setLosses(losses + 1);
        setGameOver(true);
      }

      if (!dead && position.x === GRID_WIDTH - 1) {
        setWins(wins + 1);
        setYouWon(true);
      }
    }, 50),
    [board]
  );

  function handleKeyPress(e) {
    const newPosition = { ...frogPosition };

    switch (e.key) {
      case "ArrowLeft":
        if (newPosition.x > 0) newPosition.x -= 1;
        break;
      case "ArrowRight":
        if (newPosition.x < GRID_WIDTH - 1) newPosition.x += 1;
        break;
      case "ArrowUp":
        if (newPosition.y > 0) newPosition.y -= 1;
        break;
      case "ArrowDown":
        if (newPosition.y < GRID_HEIGHT - 1) newPosition.y += 1;
        break;
      default:
        return;
    }

    setFrogPosition(newPosition);
    debouncedCheck(newPosition);
  }

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [frogPosition, board]);

  React.useEffect(() => {
    resetBoard();
  }, []);

  const resetBoard = () => {
    const gameBoard = Array(GRID_WIDTH)
      .fill()
      .map(() => Array(GRID_HEIGHT).fill(false));

    let x = 0;
    let y = 0;
    const endX = GRID_WIDTH - 1;
    const endY = GRID_HEIGHT - 1;

    while (x !== endX || y !== endY) {
      gameBoard[x][y] = true; // Place a lily pad

      const dx = Math.sign(Math.random() - 0.5);
      const dy = Math.sign(Math.random() - 0.5);

      // Move if within bounds and closer to the end
      if (
        x + dx >= 0 &&
        x + dx < GRID_WIDTH &&
        Math.abs(x + dx - endX) <= Math.abs(x - endX)
      ) {
        x += dx;
      }
      if (
        y + dy >= 0 &&
        y + dy < GRID_HEIGHT &&
        Math.abs(y + dy - endY) <= Math.abs(y - endY)
      ) {
        y += dy;
      }
    }

    // Place lily pad at the end position
    gameBoard[endX][endY] = true;

    // Randomly fill the rest of the board
    for (let i = 0; i < GRID_WIDTH; i++) {
      for (let j = 0; j < GRID_HEIGHT; j++) {
        if (!gameBoard[i][j]) {
          // If not part of the guaranteed path
          gameBoard[i][j] = Math.random() >= 0.7;
        }
      }
    }

    setBoard(gameBoard);
  };

  const tryAgain = () => {
    setSeconds(10);
    setGameOver(false);
    setYouWon(false);
    resetBoard();
    setFrogPosition({ x: 0, y: 1 });
  };

  if (gameOver) return <GameOver tryAgain={tryAgain} />;
  if (youWon) return <YouWon playAgain={tryAgain} />;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        Countdown: {Math.floor(seconds / 60)}:
        {(seconds % 60).toString().padStart(2, "0")}
      </h1>
      <div
        className="game-container"
        style={{
          width: GRID_WIDTH * CELL_SIZE,
          height: GRID_HEIGHT * CELL_SIZE,
        }}
      >
        {board.map((row, x) =>
          row.map(
            (cell, y) => cell && <LilyPad key={x + y} position={{ x, y }} />
          )
        )}
        <Frog position={frogPosition} />
      </div>
      {wins === 1 && <h2>{wins} win 😄</h2>}
      {losses === 1 && <h1>{losses} loss 😱</h1>}
      {wins > 1 && <h2>{wins} wins 😄</h2>}
      {losses > 1 && <h2>{losses} losses 😱</h2>}
    </div>
  );
}

export default FroggyFrolic;
