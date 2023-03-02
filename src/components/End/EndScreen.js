import React from "react";
import "./End.css";
import { useContext } from "react";
import { GameStateContext } from "../../helpers/Contexts";
import { Questions } from "../../helpers/Questions";

const EndScreen = () => {
  const { score, setScore, setGameState, userName, point } = useContext(
    GameStateContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("home");
  };
  return (
    <div className="App">
      <div className="EndScreen">
        <h1>Quiz Finished</h1>
        <h3>Attendee Name : {userName}</h3>
        <h1>
          {score} correct answers out of {Questions.length}
        </h1>
        <p>
          {point} points
        </p>
        

        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    </div>
  );
};

export default EndScreen;
