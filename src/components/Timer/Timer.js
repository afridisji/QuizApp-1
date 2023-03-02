import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>Your Time is Up!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{seconds}</span>;
  }
};

ReactDOM.render(
  <Countdown
    date={Date.now() + 30000}
    renderer={renderer}
  />,
  document.getElementById('root')
);

export default Timer;