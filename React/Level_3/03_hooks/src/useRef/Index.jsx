// import React from 'react'
// import { useState } from 'react'

// const Index = () => {
//     const [bg,setbg] = useState("white");
//     const changebg = ()=>{
//         const colors = ["yellow","pink","blue","orange","purple","black"];
//         setbg(colors[Math.floor(Math.random()*colors.length)])
//     }
//     console.log("Re rendered component");


//   return (
//     <div style={{height:'100vh',backgroundColor:bg,display:'flex',justifyContent:'center',alignItems:'center'}}>
//         <button onClick={changebg}>Change Background</button>
       
//     </div>
//   )
// }

// export default Index

// dom jesi manipulation
// jitne baar krenge utne baar component rerender hofga change bg pe
// ab ek baar bg change kr ra utne me poora component rerender ho jara 
// issi ko rone ke liye useref use krte 


// sbse pehle use state use ni krenge 
// use ref use krenge



import React from 'react'
import { useRef } from 'react'

const Index = () => {
    const bgRef = useRef(null);
    // isme ek current hota -> current->current value ko access kr skte
    const changebg = ()=>{
        const colors = ["yellow","pink","blue","orange","purple","black"];
        bgRef.current.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
        
    }
    console.log("Re rendered component");


  return (
    // reference dia 
    <div  ref={bgRef} style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>

        <button onClick={changebg}>Change Background</button>
       
    </div>
  )
}

export default Index

// ab componentr re render ni hoga