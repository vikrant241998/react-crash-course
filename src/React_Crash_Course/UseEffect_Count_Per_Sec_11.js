import React, {useState, useEffect} from 'react'

const UseEffect_Count_Per_Sec_11 = () => {
    const [count, setCount] = useState(0)

    const tick = () =>{
        console.log("Count per second")
        setCount(count+1);
    }

    useEffect(()=>{
        const interval = setInterval(tick, 1000)
        return ()=>{
            clearInterval(interval)
        }
    },[count])

    
  return (
    <div>
        Count Per Second:- {count}
    </div>
  )
}

export default UseEffect_Count_Per_Sec_11