// jab jab hmare pass data hoga aur hmko dikhana hoga ui pe to hum map hi use krenge
// import React from 'react'

// const Map = () => {
//     const data = ["Google","Microsoft","Apple","Facebook"];

//   return (
//     <div>
//         {data.map((element,index)=><div key={index}>
//             <h1>{element}</h1>
//         </div>

//         )}
//     </div>
//   )
// }

// export default Map

//  Each child in a list should have a unique "key" prop.

// Check the render method of `Map`. See https://react.dev/link/warning-keys for more information.

// jab bhi map krenge hmesha key dena hi pdega | jiske through react identify kar pata hai ki konse element ko ui ne edit delete ya render krna hai

// hum index ki jageh {Math.random()} de skta | unique cheez



import React from 'react'

const Map = () => {
    // const data = ["Google","Microsoft","Apple","Facebook"];
    const smartPhones = [
        {id:1,model:"Iphone 15",img:"https://iplanet.one/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1695427876&width=823"},

        {id:2,model:"Iphone 16",img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-model-unselect-gallery-1-202409?wid=5120&hei=2880&fmt=webp&qlt=90&.v=ZnlzVUZzRWd3dlg0RllqbHhQSUpKTGdzSmpObkZCM3MrNmJ5SkhESlNDaWhXRnNvWU5kTFRnSWM5eDdhTWw0bEpFd0xhWDVibStLdGRYRmxkNGI4VTR2UjRaSC9URTlmd0FSb1ZTWjRnb3Y5aFhSWndydDBTaGRRd3dvbVFwcGk&traceId=1"},

        {id:3,model:"Iphone 17",img:"https://rukminim2.flixcart.com/image/2880/2880/xif0q/mobile/s/t/g/-original-imahft5gqkxzyeqa.jpeg?q=90"},
    
    ]

  return (
    <>
        {/* {data.map((element,index)=><div key={index}>
            <h1>{element}</h1>
        </div>

        )} */}

        {smartPhones.map(data=>
        <div key={data.id}>
            <img style={{width:"250px"}} src={data.img} alt="" />
            <h3>{data.model}</h3>     
        </div>)}
    </>
  )
}

export default Map

// yhan jo hmne data use kia vo data hmara api se aaegi
// user interface me jb bhi kuch show krna to map use krenge