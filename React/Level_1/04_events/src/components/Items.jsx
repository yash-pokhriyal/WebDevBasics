import React from 'react'

const Items = () => {
    const age =31;
    const aadhar = true;
    const gmail = false;

  return (
    <>
    <div>
        {/* ternary operater */}
        {
            age>30 ?(
                <>
                <h1>Its Time For Being Ascetic</h1>
                </>
            ):(
                <>
                <h1>Study And Earn Money</h1>
                </>
            )
        }
    </div>

    <div>
        {/* and and operator */}
        {aadhar && <h1>You can open bank account</h1>}
        {gmail && <h1>You can make youtube account</h1>}
        
    </div>
    </>
  )
}

export default Items