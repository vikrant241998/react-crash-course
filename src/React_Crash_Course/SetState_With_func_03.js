import React, {useState} from 'react'

const SetState_With_func_03 = () => {
  const [count, setCount] = useState(0)

  
    return (
    <div>
        <p>Coun Numbers: {count}</p>
        <button onClick={()=>setCount(count+1)}>increase</button>
    </div>
  )
}

export default SetState_With_func_03