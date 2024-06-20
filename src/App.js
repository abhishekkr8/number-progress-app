import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import './App.css';

const App = () => {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);

  const handleIncrement = () => {
    if (num < 150) {
      setHistory([...history, num]);
      setFuture([]);
      setNum(num + 1);
    }
  };

  const handleDecrement = () => {
    if (num > 0) {
      setHistory([...history, num]);
      setFuture([]);
      setNum(num - 1);
    }
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const lastState = history.pop();
      setFuture([num, ...future]);
      setNum(lastState);
      setHistory([...history]);
    }
  };

  const handleRedo = () => {
    if (future.length > 0) {
      const nextState = future.shift();
      setHistory([...history, num]);
      setNum(nextState);
      setFuture([...future]);
    }
  };

  return (
    <div className="App">
      <h1>Number Progress App</h1>
      <div className="controls">
        <button onClick={handleDecrement}>-</button>
        <span>{num}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div className="history-controls">
        <button onClick={handleUndo} disabled={history.length === 0}>Undo</button>
        <button onClick={handleRedo} disabled={future.length === 0}>Redo</button>
      </div>
      <ProgressBar value={num} />
    </div>
  );
};

export default App;
