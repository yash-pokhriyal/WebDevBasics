import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Phones from './pages/Phones'
import Laptops from './pages/Laptops'
import Camera from './pages/Camera'

const Index = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
        {/* child route */}
        {/* default child |index */}
         <Route index element={<Home/>}/> 
         <Route  path="about" element={<About/>}/>
         <Route path="products" element={<Product/>}>
            <Route path="phones" element={<Phones />} />
            <Route path="laptops" element={<Laptops />} />
            <Route path="camera" element={<Camera />} />
        </Route>
           
        </Route>

      </Routes>
    </Router>

    </>
  )
}

export default Index

// mai chahta ki route ke andar child bne | like product/phone 
// jab bhi koi / pe jae to mai dikhana chahta layout ko


// ab yhan home product about ka component ni aara

// jab hmaare paas child component hote to react usko show ni kar pata 

// show krne ke liye humko chahiye outlet

// ab pehle layout ke andar child component to uske andar outlet use krna and same product ke andar child to uske andar outlet use karna