import React, { useState } from 'react';
import './App.css';


function App() {
  const [ {count, count2}, setCount] = useState({count: 10, count2: 20});

  return (
    <div>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
      <br/>
      {/* using Updater Function with Hook 
      * Using an updater function will preserve the order of how state should be applied as well as make sure all previous states are flushed through.
      * Avoid race condition which get the update overwritten.
      */}
      <button 
        onClick={() =>
          setCount(currentState => ({
            ...currentState,
            count: currentState.count +1 
          }) 
        )}
      >
        Increase
      </button>
    </div>
  );
}

export default App;
