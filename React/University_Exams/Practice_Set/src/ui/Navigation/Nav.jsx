import React from "react";
import { useLocation,Link,NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate =  useNavigate();
  return (
    <nav className="navbar">
      <div onClick={()=>navigate('/')} className="navbar-logo">MyWebsite</div>

      <ul className="navbar-links">
        <li onClick={()=>navigate('/')}><a href="#home">Home</a></li>
        <li onClick={()=>navigate('/about')}><a href="#about">About</a></li>
        <li onClick={()=>navigate('/contact')}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
};

export default Navbar;
