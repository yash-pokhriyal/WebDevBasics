import React from 'react'
import MyContext from '../context/MyContext'
import { useContext } from 'react'

const People = ( ) => {
  // console.log(useContext(MyContext));
  // {money: 1000, name: 'yash', counter: 0, setCounter: ƒ}
  // const data = useContext(MyContext);
  const { name,money,data,counter,setCounter } = useContext(MyContext);
  return (
    <>
    {/* <h1>Welcome to People Component : </h1>
    <h2>Name : {data.name}</h2>
    <h2>Money : {data.money}</h2>
    <h3>Data : {data.data}</h3>
    <h1>Counter = {data.counter}</h1> */}
    <h1>Welcome to People Component : </h1>
    <h2>Name : {name}</h2>
    <h2>Money : {money}</h2>
    <h3>Data : {data}</h3>
    <h1>Counter = {counter}</h1>
    <button onClick={()=>setCounter(counter+1)}>Increase</button>
    <button  onClick={()=>setCounter(counter-1)}>Decrease</button>
    </>
  )
}

export default People

// Hmaare react me ek se jyada context honge jese product ka context hoga agar e commerce app bnara toh 