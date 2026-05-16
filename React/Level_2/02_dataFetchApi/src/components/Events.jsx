import React from 'react'

const Events = () => {
    const showAlert =()=>{
        alert("This is my brand new alert with event")
    }
    const bg_light =()=>{
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
    const bg_dark =()=>{
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    }
    let count = 0;
    console.log('count value before',count)
    let counter = (value)=>{
        count = value;
        alert('This is new alert '+value )   
        // yhan , comma pe output ni dikhega
        console.log('count value after',count)
    }
  return (
    <>
    <h1>Events</h1>
    <h1>Counter = {count}</h1>
    <button onClick={showAlert}>Click</button>
    <div>
        <button onClick={bg_light}>Change to light</button>
        <button onClick={bg_dark}>Change to dark</button>
        <button onClick={()=>counter(20)}>Count value</button>
    </div>
    </>
  )
}

export default Events

// () ni denge function kyunki aese dia to bine call kiye hi call ho jaega
// jab function with value ho to value pass arrow function bnaake krenge
// event ko pass krenge as a callback

// hmara count variable console me update ho jara par screen pe ni hora