import React, {useState, useEffect} from 'react'

const UseEffect_After_Render_07 = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title= `You have Click ${count} items` 
    })
    
  return (
    <div>
        <button onClick={()=> setCount(count+1)}>Click {count} items</button>
    </div>
  )
}

export default UseEffect_After_Render_07