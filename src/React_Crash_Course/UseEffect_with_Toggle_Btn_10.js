import React, {useState, useEffect} from 'react'

const UseEffect_with_Toggle_Btn_10 = () => {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)
    const [display, setDisplay] = useState(true)


    const logMousePosition =(e) =>{
        console.log("Mouse Move Position");
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("Called UseEffect")
        window.addEventListener('mousemove', logMousePosition)
    }, [])

  return (
    <div>
        <button onClick={()=> setDisplay(!display) }>Toggle Hooks</button>
    <br/>
    <br/>
    {
        display ?
            <p>Hooks X - {X} Y - {Y}</p>
        : null
        }
    </div>
  )
}

export default UseEffect_with_Toggle_Btn_10