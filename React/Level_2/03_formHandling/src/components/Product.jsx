import React from 'react'
import './Product.css'

const Product = ({name,price,color,data={}}) => {
  // Internal Styling
  const myStyle ={
    backgroundColor:'wheat',
    color:'black',
    padding:'10px',
    margin:'10px'
  }
 
  return (
     // Inline styling
    <div 
    // style={{backgroundColor:'blue',padding:'10px',margin:'10px',border:'1px solid yellow',borderRadius:'10px'}}

    // Internal Styling

    // style={myStyle}

    // external styling |global using index.css
    // className='container'

    // external styling |global using index.css
    className='con'


    >
        <h1>Welcome to Product</h1>
        <h2>Brand : {name}</h2>
        <h3>Price : {price}</h3>
        <h3>Color : {color}</h3>

        {/* {data.ram && <p>Ram :{data.ram}</p>}
        {data.rom && <p>Rom :{data.rom}</p>}
        {data.chip && <p>Chip :{data.chip}</p>} */}
     
    </div>
  )
}

export default Product


// jsx me class ni hota yhan className hota