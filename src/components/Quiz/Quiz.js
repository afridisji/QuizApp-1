import "./Quiz.css";
import { Questions } from "../../helpers/Questions";
import { useState, useEffect } from "react";
//import Timer from '../Timer/Timer'
import { useContext } from "react";
import { GameStateContext } from "../../helpers/Contexts";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [answerList, setAnswerList] = useState({});
  // const [points, setPoints] = useState(0);

  const { score, setScore, gameState, setGameState, point, setPoint } = useContext(
    GameStateContext
  );

  window.addEventListener("beforeunload", (ev) => {
    ev.preventDefault();
    return ev.returnValue = 'Are you sure you want to close?';
  });


  const create = (abc, id) => {
    setAnswerList({ ...answerList, [id]: abc })
  }


  console.log(answerList)
  console.log(answerList[Questions[currentQuestion].id])


  const chooseOption = (option) => {
    setOptionChosen(option);
    // if (optionChosen === Questions[currentQuestion].answer) {
    //   setPoint(Questions[currentQuestion].points)
    // }
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
      setPoint(point + Questions[currentQuestion].point)
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const previousQuestion = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion - 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  const complete = () => {

    alert('You Sure want to submit?')
    setGameState("finished");
  }


  useEffect(() => {
    const timer = setTimeout(() => {
      //navigation.navigate('Start2',{paramKey :quiz_id})
      //setGameState("finished");
      //console.log('asduog')
      setGameState("finished")
    }, 100000);
    return () => clearTimeout(timer);
  }, []);

  console.log(optionChosen)


  return (
    <div className="App">
      <div className="Quiz">
        <CountdownCircleTimer
          size={100}
          isPlaying
          duration={100}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>


        <h1>{Questions[currentQuestion].prompt}</h1>
        <div className="questions">
          <form>
            <input
              type="radio"
              id="optionA"
              name="option"
              checked={answerList[Questions[currentQuestion].id] === Questions[currentQuestion].optionA ? true : false}
              onClick={() => {
                chooseOption("optionA");
                create(Questions[currentQuestion].optionA, Questions[currentQuestion].id);

              }} />

            <span>{Questions[currentQuestion].optionA}</span>


            <input
              type="radio"
              id="optionB"
              name="option"
              value="optionB"
              checked={answerList[Questions[currentQuestion].id] === Questions[currentQuestion].optionB ? true : false}
              onClick={() => {
                chooseOption("optionB");
                create(Questions[currentQuestion].optionB, Questions[currentQuestion].id);
              }} />
            <span>{Questions[currentQuestion].optionB}</span>

            <input
              type="radio"
              id="optionC"
              name="option"
              value="optionB"
              checked={answerList[Questions[currentQuestion].id] === Questions[currentQuestion].optionC ? true : false}
              onClick={() => {
                chooseOption("optionC");
                create(Questions[currentQuestion].optionC, Questions[currentQuestion].id);
              }} />

            <span>{Questions[currentQuestion].optionC}</span>

            <input
              type="radio"
              id="optionD"
              name="option"
              value="optionB"
              checked={answerList[Questions[currentQuestion].id] === Questions[currentQuestion].optionD ? true : false}
              onClick={() => {
                chooseOption("optionD");
                create(Questions[currentQuestion].optionD, Questions[currentQuestion].id);
              }} />
            <span>{Questions[currentQuestion].optionD}</span>

          </form>




        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

          {currentQuestion == 0 ? (
            <button id="nextQuestion">
              Back
            </button>
          ) : (
            <button onClick={previousQuestion} id="nextQuestion">
              Back
            </button>
          )
          }


          {currentQuestion == Questions.length - 1 ? (
            <button onClick={finishQuiz} id="nextQuestion">
              Finish Quiz
            </button>
          ) : (
            <button onClick={nextQuestion} id="nextQuestion">
              Next Question
            </button>

          )}


          <button onClick={complete}>Submit</button>




        </div>

        {currentQuestion == Questions.length - 1 ?
          <p>Review</p>
          :
          <p></p>

        }
      </div>
    </div >
  );
}

export default Quiz;
