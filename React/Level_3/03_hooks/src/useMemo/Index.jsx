import React from 'react'
import { useState,useMemo } from 'react'

const Index = () => {
    const [count,setcount] = useState(0);

    const [num,setnum]=useState(10)
    
    // complex or expensive function run on every render

    // const complexCalculation = () =>{
    //     // console.log("Calculating....");
    //     for(let i =0;i<10000;i++){
    //         // console.log("Calculating....");
    //     }
    //     return num*2;
    // }
    //   const result = complexCalculation;

    // usememo use 
    const complexCalculation = useMemo(
        ()=>{
            for(let i=0;i<1000;i++){
                console.log("Calculating")
            }
            return num*2
        },[num] //only run when num state change
    )

    const result = complexCalculation;
    // use memo variable deta
  return (
    <div>
        <h2>Result = {result}</h2>

        <button onClick={()=>setcount(count +1)}> Increase</button>
        <h4>Count :{count}</h4>

        <h2>Num = {num}</h2>
        <button onClick={()=>setnum(num+1)}>Increase num</button>
       
    </div>
  )
}

export default Index


// manlijiye apke react app me hevy calculation hai 

// ab jab jab counter chlega to console me calculation bhi chlra hai 
// jabki mene call hi ni kia function ko

// ab loop ke anadar hua to 10k baar chlega browser refresh hi ni hoga jb tk poora ni hota toh

// ab ye kya krega ki pehle 10k baar console me print krega then count increase hoga

// to solve this problem we use usememo

// ab num ko increase kia tab calculate kia
// react ki property state ko change krte to poora rerender hoga 

