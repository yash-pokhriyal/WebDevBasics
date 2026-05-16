import React from 'react'
import Product from './components/Product'
import Items from './components/Items'
import Events from './components/Events'
import UseState from './components/UseState'
import Map from './components/Map'
import Filter from './components/Filter'
import UseEffect from './components/UseEffect'
import FetchData from './components/FetchData'
import FormHandling from './components/FormHandling'

const App = () => {

  const obj ={
    ram:"4gb",
    rom:"128gb",
    chip:"intel i9",
  }
  return (
  
    <>
      {/* <Product name="iphone-16" price = {70000} color = "blue" data={obj}/>
      <Product name="iphone-17" price = {80000} color="black" /> */}

      {/* <Items/> */}

      {/* <Events/> */}

      {/* <UseState/> */}

      {/* <Map/> */}

      {/* <Filter/> */}

      {/* <UseEffect/> */}

      {/* <FetchData/> */}

      <FormHandling/>
     
      
   </>
  )
}

export default App

