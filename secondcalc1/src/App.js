import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count <= 0) {
      setCount(0); 
    } else {
      setCount(count - 1);
    }
  };
  
  const increment = () => {
    if (count >= 0 && count < 10) {
      setCount(count + 1);
    } else if (count === 10) {
      setCount(0); 
    }
  };

  return (
    <div className="App">
      <div style={{ margin: "40px auto" }}>
        <button style={{ backgroundColor: "green" }} onClick={increment}>
          ➕
        </button>

        <p>{count}</p>

        <button style={{ backgroundColor: "red" }} onClick={decrement}>
          ➖
        </button>
      </div>
    </div>
  );
}

export default App;
