import React from 'react'
import { useEffect,useState } from 'react'

const FetchData = () => {
    const [Api_data, setApi_Data] = useState([])
    useEffect(() => {
      const fetchData = async () =>{
        const api = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await api.json();
        console.log("My data = ",data)
        setApi_Data(data)
      }
      fetchData()
    }, [])
    
  return (
    <div>
        {Api_data.map((item)=>
        <div key = {item.id} style={{textAlign:"center",backgroundColor:"blue" ,margin:"10px",padding:"10px"}}>
           <h2>{item.title}</h2>
        </div>
        )}
    </div>
  )
}

export default FetchData


// data fetching wala kaam use effect se hi hota hai

// yhi code likhenge chahe kisi bhi api se data fetch krein