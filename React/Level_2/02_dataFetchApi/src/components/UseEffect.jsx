// import React from 'react'
// import { useEffect } from 'react'

// const UseEffect = () => {
//      useEffect(() => {
//     //  console.log("use effect is running!")
//     //  browser me do baar chlega | iske peeche react ke life cycle method | hooks functional pe work|
//     document.title = "yash"
//      },[])
     

//   return (
//     <div>UseEffect</div>
//   )
// }

// export default UseEffect


// konsa hook jo browser refresh krne pe automatic chl jata | useEffect hook

// useEffect | ek component ke change ya update hone se kisi dusre component me effect laata side effect perform krta

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffect = () => {
    const [counter, setCounter] = useState(0)

     useEffect(() => {
    document.title = counter
     },[counter]) //dependency array | khali dia to use effect bas ek baar chlega | jis smeh browser refresh hoga
     

  return (
    <div>
        <h1>Counter = {counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        <button onClick={()=>setCounter(counter-1)}>Decrement</button>
    </div>
  )
}

export default UseEffect


// yhan me chahta tha ki increment ya decrement se title ki value badle | sideeffect
// [] dependency array in use effect hook
// khali dia to use effect bas ek baar chlega | jis smeh browser refresh hoga
// ab vhan kuch denge jo change hoga jese counter | counter bdlega to useEffect chlega
// hum ye isiliye pass krte taaki uske change ya update hone se hum apne use effect ko chlana chahte hain