import { useState } from "react";
import Exercise1 from "./components/exercise/Exercise1";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

const App = () => {
  const [activePlayer, setActivePlayer] = useState("X");
  const onSelectHandler = () => {
    setActivePlayer(activePlayer === "X" ? "O" : "X");
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
    </main>
  );
};

export default App;
