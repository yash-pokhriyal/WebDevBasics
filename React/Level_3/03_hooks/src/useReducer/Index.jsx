import React from 'react'
import { useReducer } from 'react';

const counterReducer = (state,action)=>{
    switch(action.type) {
        case "Increment":
            return {counter:state.counter+1};
            // return state+1

        case "Decrement":
            return {counter:state.counter-1};
        case "Increase10":
            return {counter:state.counter+10};
        case "Reset":
            return {counter:0};
         
    }
}
const Index = () => {
    // yhan apne function ka naam denge usereducer ke andar| dispatch function hai
    // counter 0 || initial state hai
    // ye counter state ke through access 
    // state ka naam zaruri ni state dein kuch bhi de skte
    const [state,dispatch] = useReducer(counterReducer,{counter:0})
 
  return (
    <div>
        <h1>Counter = {state.counter}</h1>
        <button onClick={()=>dispatch({type:"Increment"})}>Increase</button>
        <button onClick={()=>dispatch({type:"Decrement"})}>Decrease</button>
        <button onClick={()=>dispatch({type:"Increase10"})}>Increase 10</button>
        <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
    </div>
  )
}

export default Index

// action | yaani hmara function
// to solve useState multiple func problem