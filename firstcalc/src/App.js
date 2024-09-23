import React,{useState} from 'react'


function App() {
const[count,setcount]=useState(0);


  return (
    <div className="App" style={{backgroundColor:"rgb(147,167,228)",margin:"auto",padding:"10%"}}>
      <center>
      <h1>Samplecalc</h1>
      <h1>{count}</h1>
      <button onClick={()=> setcount(count+1)}>Increment</button>
      
      <button onClick={()=> setcount(count-1)}>Decrement</button>
     
     
      <button onClick={()=> setcount(0)}>Reset</button>
    </center>
    </div>
  );
}

export default App;
