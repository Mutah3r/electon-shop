import React from 'react';
import './Card.css'

const Card = ({ product }) => {
    const { title, price, image, rating } = product;
    const solidStars = Math.round(rating.rate);
    const outlineStars = 5 - solidStars;
    const ratings = [];

    for (let i = 0; i < solidStars; i++) {
        ratings.push(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ACACAC">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>);
    }
    for (let i = 0; i < outlineStars; i++) {
        ratings.push(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ACACAC">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>);
    }

    // image, title, price, ratings
    return (
        <div className='card-wrapper'>
            <div className="card-content">
                <div className="card-image-container">
                    <img draggable={false} src={image} alt="" />
                    <div className="add-fav-container">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                </div>
                <div className="card-text-container">
                    <h4>{title}</h4>
                    <p>${price}</p>
                    <span>
                        {...ratings}
                    </span>
                </div>
                <div className="card-btn-container">
                    <button className="add-to-cart">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;