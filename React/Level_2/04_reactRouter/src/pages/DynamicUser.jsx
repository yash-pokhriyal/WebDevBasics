import React from 'react'
import { useParams,useLocation, useNavigate } from 'react-router-dom'

const DynamicUser = () => {
    // console.log(useParams())
    const {slug} = useParams();
    const user = [
        {id:1,name:"superman",gmail:"super@gmail.com",age:23},
        {id:2,name:"batman",gmail:"batman@gmail.com",age:23},
        {id:3,name:"spiderman",gmail:"spider@gmail.com",age:23},
        {id:4,name:"ironman",gmail:"ironman@gmail.com",age:23},
    ]
    const specific_user = user.find(data=>data.id==slug);

     console.log(useLocation())
    //  {pathname: '/user/1', search: '', hash: '', state: null, key: 'am1cz58o', …}hash: ""key: "am1cz58o"mask: undefinedpathname: "/user/1"search: ""state: null[[Prototype]]: Object
    //  DynamicUser.jsx:15 

    const  location = useLocation();
    const navigate = useNavigate();
  return (
    <div>
        {/* <h1>Slug  = {slug}</h1> */}
        <h1>Name = {specific_user.name}</h1>
        <h1>Gmail = {specific_user.gmail}</h1>
        <h1>Age = {specific_user.age}</h1>

        { location.pathname == "/user/3" && <div>
            <h1>Hello my favourite {specific_user.name}</h1>
        </div>}

        <div>
            <button onClick={()=>navigate('/')}>Go To Home</button>
        </div>
    </div>
  )
}

export default DynamicUser

// ab yhan pe jispe click kar rhe uska id:1 and so on ara ab ye id kahan se aara hmne jo app.jsx mai /user/:id dia use 
// agar /user/:slug dete to slug 1 2 so on aata 

//  filter hmesha array return krke deta 

// useLocation tab kaam aega jab dynamic cheezein dikhaenge path name deta
// agar user/3 hai to mai hello ya button dikhana hahra

// useNavigate to redirect jese hum login krte to redirect ho jaate home page pe ye redirect wala kaam useNavigate se karte

// koi soch skta ye kaam link se bhi ho skta tha but links ki limitations hai links se kuch hi cheezein ho skti

// naya dynamic navigation bar