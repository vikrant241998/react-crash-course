import React, {useReducer} from 'react'

const initialState = 0;
const reducer = (state, action) =>{
    switch (action) {
        case 'increment':
            return state + 1

        case 'decrement':
            return state - 1
            
        case 'reset':
            return initialState
    
        default:
            return state
    }

}

const UseReducer_13 = () => {
const[count, dispatch] =  useReducer(reducer, initialState)
  return (
    <div>
        <h4>Count  {count}</h4>
        <button onClick={()=> dispatch('increment') }>Increment</button>&nbsp;
        <button onClick={()=> dispatch('decrement') }>Decrement</button>&nbsp;
        <button onClick={()=> dispatch('reset') }>Reset</button>
    </div>
  )
}

export default UseReducer_13