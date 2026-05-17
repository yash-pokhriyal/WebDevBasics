import React from 'react'
import { useId } from 'react'

function Item({name}){
    const id = useId();
    return <div>
        <span>Name = {name} =</span>:{id}
    </div>
}

const Index = () => {
    const data = ["Apple","Banana","Mango","Oranges"]
  return (
    <div>
        {data.map((d)=>(
            <Item key={d} name={d}/>
        ))}
    </div>
  )
}

export default Index


// use id hook use hota hai is se unique id generate kar skte hain 
// jab list ko map krte to use id hook use kar skte

// each child in list have a unique id