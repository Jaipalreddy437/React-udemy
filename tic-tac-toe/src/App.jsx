import { useState } from "react";
// import Exercise1 from "./components/exercise/Exercise1";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";

const App = () => {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState("X");

  const onSelectHandler = (rowIndex, colIndex) => {
    setActivePlayer(activePlayer === "X" ? "O" : "X");
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={activePlayer === "X"}
            initialName="Player 1"
            symbol="X"
          />
          <Player
            isActive={activePlayer === "O"}
            initialName="player 2"
            symbol="O"
          />
          {/* <Exercise1 /> */}
        </ol>
        <GameBoard
          onSelectSquare={onSelectHandler}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log />
    </main>
  );
};

export default App;
