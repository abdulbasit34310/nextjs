"use client"
import { useState } from 'react';
import React from 'react';
import './navigationBar.css';

const NavigationBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleButtonToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="logo">
                        <h1>Abdul Basit</h1>
                    </div>

                    <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/service'>Our Services</a></li>
                            <li><a href='/locations'>Locations</a></li>
                            <li><a href='/blog'>Blog</a></li>
                            <li><a href='/contact'>Contact</a></li>
                            <li><a href='/about'>About</a></li>
                        </ul>
                    </nav>

                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}>
                            |||
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavigationBar;