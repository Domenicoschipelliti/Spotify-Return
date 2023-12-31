import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Music from "./components/Music";
import Ricerca from "./components/Metallica";
import Player from "./components/Player";
import Eminem from "./components/Eminem";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <h2
          className="text-light"
          style={{ display: " flex", justifyContent: "center" }}
        >
          Queen
        </h2>
        <Music />
        <h2
          className="text-light"
          style={{ display: " flex", justifyContent: "center" }}
        >
          Metallica
        </h2>
        <Ricerca />
        <h2
          className="text-light"
          style={{ display: " flex", justifyContent: "center" }}
        >
          Eminem
        </h2>
        <Eminem />

        <Player />
      </BrowserRouter>
    </div>
  );
}

export default App;
