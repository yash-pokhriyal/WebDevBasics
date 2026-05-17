import React from 'react'
import Child from './Child'
import { useState ,useCallback} from 'react';

const Index = () => {
    const [counter,setCounter] = useState(0);
    const [counter2,setCounter2] = useState(0);

    // const handleClick =()=>{
    //     setCounter(counter+1);
    // }

    // jis function ko save krna 
    const handleClick = useCallback(
        ()=>{
            setCounter(counter+1);
        },[counter]
        // ab jab jab counter change hoga tabhi jaake ye function rerender hoga vrna rerender ni hoga
    )
  return (
     
    <div>
        <h1>Counter at Parent = {counter2}</h1>
       
        <button onClick={()=>setCounter2(counter2+1)}>Increase Parent Counter</button>
         
         {/* agar counter show krna to counter bhi pass krdo */}
         <Child handleClick = {handleClick} counter={counter}/> 
    </div>
  )
}

export default Index

// jab pe parent me button ko click karunga to usko reflection child me bhi aega jo ki ni aana chahiye 


// hmhe dikhega child componenet me console me jab jab Increase parent button counter kar rhe 

// utne baar child coomponent is rendering aara 

// jab mene setcounter ko use hi ni kia aur handleClick kyu chlra 

// react me jab jab kuch bhi state update hota to poora component ke element re render hote

// yahn counter2 wala state update hora jiske karan dusra componenet rerender hora 

// ab bade project me sab khraab ho jaega 

// to stop this problem we use useCallback hhok ko

// function ko memorise krlega aur dubara rerender ni krega

// child component me change ni krna 
// bas parent me change function jo paas kia usko usecallback me rkhna 
// usememo value ko memorise krega
// useeffect ,use memo ,usecallback   uselayouteffct  ka syntax lagbhag same rehta.
