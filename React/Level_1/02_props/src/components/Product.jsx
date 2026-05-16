// import React from 'react'

// const Product = (props) => {
//   return (
//     <div>
//         <h1>Welcome to Product</h1>
//         <h2>Brand : {props.name}</h2>
//         <h3>Price : {props.price}</h3>
//         <h3>Color : {props.color}</h3>
//     </div>
//   )
// }

// export default Product

// functionality ko ab use krna to yhan pe likhenge props

// ab baar baar props to ni likh skte | To hum krenge destructure

import React from 'react'

// const Product = ({name,price,color}) => {
//   return (
//     <div>
//         <h1>Welcome to Product</h1>
//         <h2>Brand : {name}</h2>
//         <h3>Price : {price}</h3>
//         <h3>Color : {color}</h3>
//     </div>
//   )
// }

// export default Product


// ------------------------------------------------------

const Product = ({name,price,color,data={}}) => {
    console.log(data)
    console.log(data.ram)
  return (
    <div>
        <h1>Welcome to Product</h1>
        <h2>Brand : {name}</h2>
        <h3>Price : {price}</h3>
        <h3>Color : {color}</h3>
        <p>Ram :{data.ram}</p>
        <p>Rom :{data.rom}</p>
        <p>Chip :{data.chip}</p>
    </div>
  )
}

export default Product

// ab screen black aari undefined aara data.ram ko read ni kar paara 
// console pe to ho jara
// humhe react to btana hoga ki data normal variable nahi hai jese name price color hain

// data ek object hai 
// kyunki object ke andar hote hain key

// ab mai chahta ki agar mene ram rom chip pass ni kia to nahi dikhna chahiye wo krenge aage lecture mai.