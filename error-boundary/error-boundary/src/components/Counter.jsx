import React, {useState} from 'react'

const Counter = ({title}) => {
    const [counter , setCounter] = useState(0);

    if(counter > 5) {
        throw new Error("child crashed")
    }
  return (
    <div>
        <p>{counter}</p>
        <p>{title}</p>
        <button onClick={()=>setCounter(counter + 1)}> ➕ </button>
    </div>
  )
}

export default Counter