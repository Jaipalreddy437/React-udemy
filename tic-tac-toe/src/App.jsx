
import Exercise1 from "./components/exercise/Exercise1";
import Player from "./components/Player";

const App = () => {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* <Player initialName="Player 1" symbol="X" />
          <Player initialName="player 2" symbol="O" /> */}
          <Exercise1 />
        </ol>
      </div>
    </main>
  );
};

export default App;
