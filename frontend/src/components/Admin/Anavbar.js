import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn } from './AnavbarElemnt';

function Anavbar() {
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

        <NavBtn>
           
            <NavBtnLink to="/alogin">
                Login
            </NavBtnLink>
        </NavBtn>
    </NavMenu>
</Nav>


  )
}

export default Anavbar