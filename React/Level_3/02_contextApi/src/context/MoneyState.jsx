import React from 'react'
import MyContext from './MyContext'
import { useState } from 'react';

const MoneyState = (props) => {
    const money = 1000;
    const name = "yash";
    const [counter,setCounter] = useState(0);
    const data = "superman"
  return (
    <>  
    {/* Provider component */}
        <MyContext.Provider value={{money,name,counter,setCounter,data}}>
            {/* data kaha jaega */}
              {props.children}
        </MyContext.Provider>
    </>
  )
}

export default MoneyState
// step 2
// state bnaya jahan data rhega
// data paas ka ek hi tareeka hai props chahe react use karo ya redux ya context api
// yhi hum saara data rkhenge

// step 3 poore app ko wrap up krenge

// hum krenge main me app me ni kr re kyunki aage chlke react router ka setup krenge