// import React from 'react'
// import Product from './components/Product'

// const App = () => {
//   return (
//     <>
//       <Product 
//       name="iphone-16"
//       price = {70000}
//       color = "blue"
//       />
//       <Product 
//       name="iphone-17"
//       price = {80000}
      
//       />
//       {/* color ni denge to error ni dega | bas color vhan pe ni dikhega */}
      
//    </>
//   )
// }

// export default App

// Props are read-only inputs passed from a parent component to a child component to define its data and behavior.
// Props basically arguments ki tarah hote hain jo ek Parent component apne Child component ko data ya information bhejne ke liye use karta hai.

// props means property 
// name hai property 


// App component kehlaega mera parent component
// product component kehlaega child component

// Interview : how we pass data from parent component to child component | by props



// ----------------------------------------------------

import React from 'react'
import Product from './components/Product'

const App = () => {

  const obj ={
    ram:"4gb",
    rom:"128gb",
    chip:"intel i9",
  }
  return (
  
    <>
      <Product name="iphone-16" price = {70000} color = "blue" data={obj}/>
      <Product name="iphone-17" price = {80000} color="black" />
      {/* color ni denge to error ni dega | bas color vhan pe ni dikhega */}
      
   </>
  )
}

export default App


// ab product ke andar jo chahe likh skte zaruri ni obj naam ki variable to obj hi likhna hai