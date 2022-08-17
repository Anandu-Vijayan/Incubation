import { style } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn } from './NavbarElements';



const Navbar = () => {
    const [user,setUser]=useState("")
    console.log(user);
    const navigate =useNavigate()
const handleLogout =(e)=>{
    localStorage.removeItem('userInfo')
    navigate('/')
    setUser(null)
    // window.location.reload()

}

    useEffect(()=>{
       let usea = localStorage.getItem('userInfo')
       if(usea){
       setUser(JSON.parse(usea))
       
       
       }
    },[user])
    console.log(setUser);
    
    return (
        
            <Nav>
                <NavLink to="/">
                    <h1>Book</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>

                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/" activeStyle>
                     {user ? user.data.firstName:""}   
                    </NavLink>


                    <NavBtn>
                        {user ? "": 
                        <NavBtnLink to="/sign-up">
                            Sign Up
                        </NavBtnLink>
}
                        {user ? <button onClick={handleLogout}>
                            Logout
                        </button>:
                        <NavBtnLink to="/login">
                            Login
                        </NavBtnLink>
}
                    </NavBtn>
                </NavMenu>
            </Nav>

        
    )
}

export default Navbar;