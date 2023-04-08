import React from 'react';
import './FeaturedCategory.css'

const FeaturedCategory = ( {cat} ) => {
    const {category, picture} = cat;
    return (
        <div>
            <div className='carousel-slide'>
                <div className="carousel-slide-content">
                    <img src={picture} draggable={false} alt="" />
                    <h3>{category}</h3>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCategory;