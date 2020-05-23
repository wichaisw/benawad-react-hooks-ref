import React, { useState } from 'react';
import './App.css';

const expensiveInitialState = () => {
  return 10
}

function App() {
  const [ count, setCount] = useState(() => expensiveInitialState());

  return (
    <div>
      {count}
      <br/>
      {/* using Updater Function with Hook 
      Using an updater function will preserve the order of how state should be applied as well as make sure all previous states are flushed through.
      */}
      <button onClick={() => setCount(currentCount => currentCount + 1)}>Increase</button>
    </div>
  );
}

export default App;
