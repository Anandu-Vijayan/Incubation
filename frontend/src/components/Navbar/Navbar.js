import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn } from './NavbarElements';

const Navbar = () => {
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
                        <NavBtnLink to="/sign-up">
                            Sign Up
                        </NavBtnLink>
                        <NavBtnLink to="/login">
                            Login
                        </NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>

        
    )
}

export default Navbar;