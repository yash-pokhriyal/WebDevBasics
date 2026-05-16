import React from 'react'
import {Link} from 'react-router-dom'

// const User = () => {
//     const user = [
//         {id:1,name:"superman",gamil:"super@gmail.com",age:23},
//         {id:2,name:"batman",gamil:"batman@gmail.com",age:23},
//         {id:3,name:"spiderman",gamil:"spider@gmail.com",age:23},
//         {id:4,name:"ironman",gamil:"ironman@gmail.com",age:23},
//     ]
//   return (
//     <>
//     {user.map((data)=><div key={data.id}>
//         <h1>{data.name}</h1>
//     </div>

//     )}

//     </>
//   )
// }

// export default User


// Mai chahta ki ab mai spiderman ko click karu to uski saari detail aajae and so on

const User = () => {
    const user = [
        {id:1,name:"superman",gmail:"super@gmail.com",age:23},
        {id:2,name:"batman",gmail:"batman@gmail.com",age:23},
        {id:3,name:"spiderman",gmail:"spider@gmail.com",age:23},
        {id:4,name:"ironman",gmail:"ironman@gmail.com",age:23},
    ]
  return (
    <>
    {user.map((data)=><div key={data.id}>
         {/* <Link>{data.name}</Link> */}
         {/* ab ye link kaam ni krega link to bna lia to mai kya doge | ab iske liye hmhe banna hoga dynamic routing */}

        <Link to={`/user/${data.id}`}>{data.name}</Link>

    </div>

    )}

    </>
  )
}

export default User


// mai chahta ki superman pe click karein to uski id vhan pe ajae user/1 and so on

// ab hum dekhre hum user pe hain vhan se superman pe click krte to user/1 aaya 
// ab mujhe is id ko lena and us particular product ka detail page dikhana | useParam