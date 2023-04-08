import React, { useEffect, useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import './FeaturedCategories.css'
import FeaturedCategory from '../FeaturedCategory/FeaturedCategory';

const FeaturedCategories = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useEffect(() => {
        fetch('featured-categories.json')
        .then(res => res.json())
        .then(data => setFeaturedCategories(data));
    },[]);

    return (
        <div className="featured-products">
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    style: {
                        alignSelf: 'center',
                        background: '#EAEAEA',
                        border: 'none',
                        borderRadius: '50%',
                        color: '#292D32',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                    style: {
                        alignSelf: 'center',
                        background: '#EAEAEA',
                        border: 'none',
                        borderRadius: '50%',
                        color: '#292D32',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`<`}</span>,
                }}
                responsiveProps={[
                    { minWidth: 0, itemsToShow: 1 },
                    { minWidth: 850, itemsToShow: 2 },
                    { minWidth: 1250, itemsToShow: 3 },
                ]}
                speed={600}
                easing="linear"
            >
                {
                    featuredCategories.map((category, idx) =>  <FeaturedCategory key={idx} cat={category} />)
                }
            </ReactSimplyCarousel>
        </div>
    );
};

export default FeaturedCategories;