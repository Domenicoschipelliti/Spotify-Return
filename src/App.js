import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Music from "./components/Music";
import Ricerca from "./components/Metallica";
import Player from "./components/Player";
import Eminem from "./components/Eminem";

function App() {
  return (
    <div className="App">
      <MyNav />
      <h2 className="text-light" style={{ marginLeft: " 115px" }}>
        Queen
      </h2>
      <Music />
      <h2 className="text-light" style={{ marginLeft: " 115px" }}>
        Metallica
      </h2>
      <Ricerca />
      <h2 className="text-light" style={{ marginLeft: " 115px" }}>
        Eminem
      </h2>
      <Eminem />

      <Player />
    </div>
  );
}

export default App;
