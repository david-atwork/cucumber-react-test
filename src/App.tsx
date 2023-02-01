import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="app">
        <h1 id="counter" className="counter">
          {count}
        </h1>
        <button
          className="increment-button"
          id="increment-button"
          onClick={() => setCount((c) => c + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
