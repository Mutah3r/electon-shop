import React from 'react';
import './Navbar.css'
import BrowseCategories from '../BrowseCategories/BrowseCategories';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-wrapper">
                    <BrowseCategories />
                    <div className="navbar-links">
                        <span><Link to='/'>Home</Link></span>
                        <span><Link to='/blog'>Blog</Link></span>
                        <span><Link to='/about'>About us</Link></span>
                    </div>
                    <div className="free-return-message">
                        <h3>30 Days Free Return</h3>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;