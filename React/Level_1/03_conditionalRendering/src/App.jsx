import React from 'react'
import Product from './components/Product'
import Items from './components/Items'

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

      {/* <Items/> */}
     
      
   </>
  )
}

export default App

