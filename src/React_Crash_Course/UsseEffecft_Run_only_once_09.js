import React, {useState, useEffect} from 'react'
import SetState_With_func_03 from './SetState_With_func_03'

const UsseEffecft_Run_only_once_09 = () => {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)


    const logMousePosition=(e)=>{
        console.log("Mouse Move Position");
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect Called")
        window.addEventListener('mousemove', logMousePosition)

    }, [])
  return (
    <div>
        Hooks  X - {X} - Y {Y}
    </div>
  )
}

export default UsseEffecft_Run_only_once_09