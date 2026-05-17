import React from 'react'
import { useEffect } from 'react'

const Child = ({handleClick,counter}) => {
    useEffect(()=>{
        console.log("Child componenet is rendering")
    },[handleClick])
  return (
    <div>
        <h1>This is child component = {counter}</h1>
        <button onClick={handleClick}>Increase child component</button>
    </div>
  )
}

export default Child

// useeffect lgado | kese show krenge hmara componenet re render hora
// useeffect ke karan do baar agya