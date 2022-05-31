import React, {  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../services/action/counterActions'

const Counter = () => {

    const count = useSelector((state) => state.count)
    // console.log(count);
    const dispatch = useDispatch()
    
    const handleIncrement = () => {
        dispatch(incrementCounter())
    }
    const handleDecrement = () => {
        dispatch(decrementCounter())
    }
    const handleReset = () => {
        dispatch(resetCounter())
    }

  return (
    <div>
        <h2>Counter App</h2>

        <h3>Count : {count}</h3>
        <button onClick={handleIncrement} >Increment</button>
        <button onClick={handleDecrement} >Decrement</button>
        <button onClick={handleReset} >Reset</button>
    </div>
  )
}

export default Counter 

// state - count : 0
// action - increment, decrement, reset
// reducers - increment, decrement, reset
// store 
// providing store in react
// use store

