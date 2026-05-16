import React from "react";
import { Link, NavLink } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <>
//     <div style={{backgroundColor:'pink',padding:'10px',marginBottom:'100px'}}>

//     <Link style={{margin:'10px'}} to={'/'}>Home</Link>
//     <Link style={{margin:'10px'}} to={'/about'}>About</Link>
//     <Link style={{margin:'10px'}} to={'/contact'}>Contact Us</Link>

//     </div>
//     </>
//   )
// }

// export default NavBar

// html me anchor tag yhan link use krte

// NavLink

const NavBar = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "pink",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "white" : "blue",
            backgroundColor: isActive ? "green" : "transparent",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "white" : "blue",
            backgroundColor: isActive ? "green" : "transparent",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "white" : "blue",
            backgroundColor: isActive ? "green" : "transparent",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/contact"}
        >
          Contact Us
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "white" : "blue",
            backgroundColor: isActive ? "green" : "transparent",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/user"}
        >
          User
        </NavLink>
      </div>
    </>
  );
};

export default NavBar
