import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h1>AL Store.</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/home">Shop</a></li>
                    <li><a href="/home">About</a></li>
                    <li><a href="/home">Cart</a></li>
                </ul>
            </nav>
        </div>

    );
};

export default Header;