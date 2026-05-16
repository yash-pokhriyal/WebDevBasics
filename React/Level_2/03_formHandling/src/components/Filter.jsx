import React from 'react'

const Filter = () => {
    const person = [
        {id:1,name:"suman",active:true},
        {id:2,name:"suraj",active:false},
        {id:3,name:"yash",active:true},
        {id:3,name:"manju",active:false},
    ]
    // const active_person = person.filter(data=>data.active)
    // console.log(active_person);
  return (
    <>
    {person.filter(data=>data.active).map(item=><div key={item.id}>
        <h1>{item.name}</h1>
    </div>)}
    </>
  )
}

export default Filter

// hum ek hi me map krake filter ra skte hain 