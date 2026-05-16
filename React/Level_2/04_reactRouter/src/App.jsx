import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NavBar from './components/NavBar'
import User from './pages/User'
import DynamicUser from './pages/DynamicUser'
import DynamicNav from './components/DynamicNav'

const App = () => {
  return (
    <>
    <Router>
      {/* for navbar */}
      {/* <NavBar/> */}

      {/* for dynamic navbar */}
      <DynamicNav/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/user' element={<User/>}/>
        {/* <Route path='/user/:id' element={<DynamicUser/>}/> */}
        <Route path='/user/:slug' element={<DynamicUser/>}/>

       
      </Routes>
    </Router>
    
    </>
  )
}

export default App