import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header/Header";
import Examples from "./components/Examples";
// import Dummy from "./components/Dummy/Dummy";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      {/* <Dummy /> */}
    </div>
  );
}

export default App;
