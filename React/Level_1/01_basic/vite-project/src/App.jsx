// react ki dunia mai har ek file component kehlaati hai

// const App = ()=>{
//   return <div>Hello</div>
// }

// export default App;


// export const App =()=><div>Hello</div>

// const App = ()=>{
//   return <div>Hello</div>
// }

// export default App;

// isme by default naam App hoga but kuch bhi naam se import kar skte hain jese Suman.
// react me saare component ka pehla letter captial case me hona chahiye .jsx hota extension
// component /js function
// rafce | emmet 
// react function ek baar mai ek value return karta

// import React from 'react'

// const App = () => {
//   const name ="Yash Pokhriyal";
//   const age = 23;
//   const person={
//     name:'superman',
//     email:'superman@gmail.com'
//   }
//   return (
//     <div>
//       <h1>Hello world</h1>
//       <h1>2+3</h1>
//       <h1>{2+3}</h1>
//       <h2>Hello my name is : {name}</h2>
//       <h2>My age is : {age}</h2>
//       <h3>Hello i am {person.name}</h3>
//       <h3>And my email is {person.email}</h3>
//     </div>
//   )
// }

// export default App


// hum yhan multiple element return ke liye fragment use krte hain <></>

const App = () => {
  const name ="Yash Pokhriyal";
  const age = 23;
  const person={
    name:'superman',
    email:'superman@gmail.com'
  }
  return (
    <>
    <div>
      <h1>Hello world</h1>
      <h1>2+3</h1>
      <h1>{2+3}</h1>
      <h2>Hello my name is : {name}</h2>
      <h2>My age is : {age}</h2>
      <h3>Hello i am {person.name}</h3>
      <h3>And my email is {person.email}</h3>
    </div>

    <h1>Heero heera laal</h1>
    </>
  )
}

export default App

// good practice always use fragments
