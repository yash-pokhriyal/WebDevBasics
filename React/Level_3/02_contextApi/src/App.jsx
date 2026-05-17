import React from 'react'
import IndianGov from './components/IndianGov'

const App = () => {
  const money = 1000;
  return (
    <div>
      <IndianGov money={money}/>
    </div>
  )
}

export default App

// ab ye money as a prop sab pe pass hoga
// to use it for people

// contxt api props drilling ki problem ko solve krne ke liye use hota 