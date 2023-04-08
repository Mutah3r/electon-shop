import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className='search-bar-wrapper'>
            <input type="text" placeholder='Serach your product' name="search-field" id="search-field" />
            <button className="button-primary" id='search-button'>Search</button>
        </div>
    );
};

export default SearchBar;