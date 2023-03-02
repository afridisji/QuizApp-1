//import "./App.css";
import Menu from "./components/Menu/Menu";
import Quiz from "./components/Quiz/Quiz";
import EndScreen from "./components/End/EndScreen";
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";
import Home from "./components/Home/Home";
// ['menu', 'playing', 'finished']
function App() {
  const [gameState, setGameState] = useState("home");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [point, setPoint] = useState(0);

  return (
    <div>
      {/* <h1>Quiz App</h1> */}
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
          point,
          setPoint,

        }}
      >
        {gameState === "home" && <Home />}
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
