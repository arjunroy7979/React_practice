import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber, doublePlus } from './Redux/Action/index'

function App() {
  const mystate = useSelector((state) => state.ChangeTheNumber)
  const secstate = useSelector((state) => state.ChangeDoubleInc)
  const dispatch = useDispatch()

  return (
    <div className='container'>
      <h1 className='p-10'>Mysate {mystate}</h1><h1 className='p-10'>Second {secstate}</h1>
      <button className='btn btn-warning mx-2' onClick={() => dispatch(decNumber())}>-</button>
      <button className='btn btn-success mx-2' onClick={() => dispatch(incNumber())}>+</button>
      <button className='btn btn-primary mx-2' onClick={() => dispatch(doublePlus())}>2+</button>
    </div>
  )
}

export default App
