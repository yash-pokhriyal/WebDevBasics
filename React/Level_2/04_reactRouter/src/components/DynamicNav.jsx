import React from 'react'
import { useState } from 'react'
import {useLocation ,useNavigate,Link} from 'react-router-dom'


const DynamicNav = () => {
    const [isLoggedIn, setIsLoggedin] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = () =>{
        setIsLoggedin(true)
        navigate('/user')
    }
    const handleLogout = () =>{
        setIsLoggedin(false)
        navigate('/home')
    }
  return (
    <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            {isLoggedIn && <>
                <li>
                    <Link to='/user'>User</Link>
                </li>
                <li>
                    <button onClick={handleLogout}>Log out</button>
                </li>
            </>}
            {!isLoggedIn && <>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <button onClick={handleLogin}>Login</button>
                </li>
            </>}
            <li>
                <Link to={'/'}>Home</Link>
            </li>

        </ul>
    </div>
  )
}

export default DynamicNav

// dynamic dikhare to user dikhein after login hi user