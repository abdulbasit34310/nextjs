import React from 'react';

const NavigationBar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/service'>Our Services</a></li>
                    <li><a href='/locations'>Locations</a></li>
                    <li><a href='/blog'>Blog</a></li>
                    <li><a href='/contact'>Contact</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavigationBar;