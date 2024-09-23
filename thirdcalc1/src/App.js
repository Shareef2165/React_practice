import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(''); // State to handle error message

  const handleIncrement = () => {
    setError(''); // Clear error message when incrementing
    if (count < 10) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setError(''); // Clear error message
      setCount(count - 1);
    } else {
      setError('Cannot decrement below 0!'); // Show error message
    }
  };

  const handleReset = () => {
    setCount(0);
    setError(''); // Clear error message
  };

  return (
    <div className="App" style={{ backgroundColor: "rgb(147,167,228)", margin: "auto", padding: "10%" }}>
      <center>
        <h1>Samplecalc</h1>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>

        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      </center>
    </div>
  );
}

export default App;
