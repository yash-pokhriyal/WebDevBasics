// import React from 'react'
// import { useState } from 'react'

// const FormHandling = () => {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const onSubmitHandler = (e) =>{
//         e.preventDefault();
//         // stopping browser default behaviour
//         console.log(name,email,password)
//     }
//   return (
//     <>

//     <form onSubmit={onSubmitHandler}>

//         <div>
//         Name:- <input onChange={(e)=>setName(e.target.value)} type="text" value={name} />    
//     </div>
//        <br />  
//     <div>
//         Email:- <input onChange={(e)=>setEmail(e.target.value)} type="email" value={email} />   
//     </div>
//       <br />    
//     <div>
//         Password:- <input onChange={(e)=>setPassword(e.target.value)} type="password" value={password} />  
//     </div>
//      <br />
//      <div>
//          <input type="submit" value="submit" />

//      </div>
    


//     </form>


//     </>
//   )
// }

// export default FormHandling

// hum abhi form me kahi bhi type ni kar paare 
// jab hum type karte hain to humko state ko change krna hoga
// aur hmne state value vhan pe de rkhi hai state change ni hogi

// jab hum type krte hain ek event fire hota hai jiska naam hai onChange event
// e.target.value krke mai kisi bhi input ki value ko le skta hun
// ab likh skte

// ab itna hi krne se submit pe page reload hojaega 
// ab bnaenge submit handler to stop the default behaviour of browser

// ----------------------------------------------------------------------------------------------------------------------

// Handling multiple input 

import React from 'react'
import { useState } from 'react'

const FormHandling = () => {
   const [formData, setformData] = useState({
    name:'',
    email:'',
    password:'',
    phone:''
   })
    

    const onSubmitHandler = (e) =>{
        e.preventDefault();
    }

    const changeHandler = (e) =>{
        const {name,value} = e.target;
        // jb kisi cheez jko copy krna chahte tb spread operater use krte
        // form data isiliye kara ki original value as it is rhe 
        // lie s ke baad a likha to s rhe a ke baad 

        setformData({...FormData,[name]:value})
    }
  return (
    <>

    <form onSubmit={onSubmitHandler}>

        <div>
        Name:- <input onChange={changeHandler}  type="text" value={formData.name} name="name"/>    
    </div>
       <br />  
    <div>
        Email:- <input onChange={changeHandler}  type="email" value={formData.email} name="email"/>   
    </div>
      <br />    
    <div>
        Password:- <input onChange={changeHandler}  type="password" value={formData.password} name="password"/>  
    </div>
     <br />
    <div>
        Phone:- <input onChange={changeHandler}  type="number" value={formData.phone} name="phone"/>  
    </div>
     <br />
     <div>
         <input type="submit" value="submit" />

     </div>
    


    </form>


    </>
  )
}

export default FormHandling


