import React from 'react'
import { useState,useLayoutEffect } from 'react';

const Index = () => {
    const [color,setcolor] = useState("black");

    useLayoutEffect(()=>{
        document.body.style.backgroundColor = color;
    },[color]) //dependency array
  return (
    <div>
        <div style={{textAlign:'center',padding:"20px"}}>
            <h2 style={{margin:'10px'}}>Current Bg color = {color}</h2>
            <button onClick={()=>setcolor("lightcoral")}>Lightcoral</button>
            <button onClick={()=>setcolor("lightgreen")}>Lighgreen</button>
            <button onClick={()=>setcolor("lightblue")}>Blue</button>
        </div>
    </div>
  )
}

export default Index


// uselayout yadi backgroung change krna ya --> ya phir background ka size window ka size measure krna 
// apka use layout pehle run hota useffect se 
// use effect dom ke change hone ke baad run hoga 
// use layout peghle hi data fetch then dom render 


// windows size ko measure and baground ko change krna

// 95%useeffect use karo 5%layout