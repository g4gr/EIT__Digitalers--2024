import React from "react";

import Logo from './Logo' ;
import Menu from './Menu' ;
import HeaderAction from "./HeaderAction";

import './Navbar.css' ;

export default function Navbar ( { children } ){

    return (
        <nav className="Navbar" >
            <Logo />
            <Menu />
            <HeaderAction />

        </nav>
    )
} ;