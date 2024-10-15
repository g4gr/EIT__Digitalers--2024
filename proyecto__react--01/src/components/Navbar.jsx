import React from "react";

import Logo from './Logo' ;
import NavbarMenu from './NavbarMenu' ;

import './Navbar.css' ;

export default function Navbar ( { children } ){

    return (
        <nav className="Navbar" >
            <Logo />
            <NavbarMenu />

        </nav>
    )
} ;