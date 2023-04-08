import React from 'react';
import './Navbar.css'
import BrowseCategories from '../BrowseCategories/BrowseCategories';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-wrapper">
                    <BrowseCategories />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;