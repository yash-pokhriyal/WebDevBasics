// import React from 'react'


// const UseState = () => {
//     let counter = 0;
//     const increase = ()=>{
//         counter++;
//         console.log("Increasing ",counter)
//     }
//     const decrease = ()=>{
//         counter--;
//         console.log("Decreasing ",counter)
//     }
//   return (
//     <>
//     <h1>
//         Counter = {counter}
//         {/* <button onClick={increase}>Increase</button>
//         <button onClick={decrease}>Decrease</button> */}
//     </h1>
    
//     </>
//   )
// }

// export default UseState

// console me chlta hai par ui me ni update hora 
// in react variable are immutable | hooks isiliye use krte 
// pehle se bne bnae function ko hooks bolte 
// c++ header file bolte
// java me library bolte
// js me pakages

// ----------------------------------------------------------------------------------------------------------------------

import React from 'react'
import { useState } from 'react';

const UseState = () => {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState("ram")
    const [price, setPrice] = useState(10.45)
    const [nums, setNums] = useState([])
    const [obj, setObj] = useState({})
    const increase = ()=>{
        
        console.log("Increasing ",counter)
        // setCounter(counter+1);
        setCounter(prev=>prev+1);

    }
    const decrease = ()=>{
       
        console.log("Decreasing ",counter)
        setCounter(counter-1)
    }
    const addVal =(val)=>{
        setCounter(val);
    }
  return (
    <>
    <h1>
        Counter = {counter}
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={()=>{addVal(100)}}>Add 100</button>
    </h1>
    
    </>
  )
}

export default UseState

// useState(initialState)
// ye do cheeezein return krega 
// setCounter value ko updat karega
// setCounter function hai | state variable bhi bolte
// counter pe value jaari 0 

// jb bhi variable bnanege react me hmesha state variable hi bnaenge

