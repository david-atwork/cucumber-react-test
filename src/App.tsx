import React, { useState } from 'react';
// import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button role="button" onClick={() => setCount(c => c+1)}>Increment</button>
      <br />
      <br />
      <br />
      <br />
      <label htmlFor="count">Total</label>
      <input readOnly name="count" id="count" value={count} />
    </div>
  );
}

export default App;
