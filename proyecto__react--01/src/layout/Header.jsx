import React from "react";

import Navbar from '../components/Navbar' ;
import Hero from '../components/Hero' ;

import './Header.css' ;

export default function Header (){

    return (
        <header className="Header" >
            <Navbar />
            <Hero />

        </header >
    )
}