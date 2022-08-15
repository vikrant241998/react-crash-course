import React, {useState, useEffect} from 'react'

const UseEffect_Run_Conditionally_08 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=>{
        console.log("ComponentDid Mount Update");
        document.title= `You have click ${count} items`
    }, [count])
    
  return (
    <div>
        <input type="text" value={name} placeholder="enter your name" onChange={e=> setName(e.target.value) } />
        <button onClick={()=>setCount(count+1)}>Click {count} items </button>
    </div>
  )
}

export default UseEffect_Run_Conditionally_08