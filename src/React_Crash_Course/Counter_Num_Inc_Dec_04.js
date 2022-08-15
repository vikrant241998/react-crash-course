import React, {useState} from 'react'

const Counter_Num_Inc_Dec_04 = () => {
    const incrementValue = 0;
    const [count, setCount] = useState(incrementValue)
    
  return (
    <div>
        <p>{count}</p>
         <button onClick={()=>  setCount(incrementValue)}>Reset</button> &nbsp;
        <button onClick={()=>  setCount(count+1)}>Increment</button> &nbsp;
        <button onClick={()=>  setCount(count-1)}>Decrement</button>       
    </div>
  )
}

export default Counter_Num_Inc_Dec_04