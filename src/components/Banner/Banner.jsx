import React, { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import './Banner.css'
import bannerImg1 from '../../assets/images/banner-img-1.png'
import bannerImg2 from '../../assets/images/banner-img-2.png'
import bannerImg3 from '../../assets/images/banner-img-3.png'

const Banner = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    return (
        <div className='banner-wrapper'>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    show: false
                }}
                backwardBtnProps={{
                    show: false
                }}
                responsiveProps={[
                    { minWidth: 0, itemsToShow: 1 }
                ]}
                dotsNav={{
                    show: true,
                    itemBtnProps: {
                        style: {
                            height: 16,
                            width: 16,
                            borderRadius: "50%",
                            border: '1px solid #ADADAD',
                            background: '#FFFFFF',
                            margin: '0 5px',
                            cursor: 'pointer'
                        }
                    },
                    activeItemBtnProps: {
                        style: {
                            height: 16,
                            width: 16,
                            borderRadius: "50%",
                            border: 0,
                            background: "#EDA415",
                            margin: '0 5px',
                            cursor: 'pointer'
                        }
                    }
                }}
                
                autoplay={true}
                autoplayDelay={2000}
                speed={500}
                easing="linear"
            >
                {/* Banner 1 */}
                <div className="banner-slide">
                    <div className="banner-action-container">
                        <h1>Canon<br />Camera</h1>
                        <div className="banner-action-btn-container">
                            <button className="button-primary">Shop now</button>
                            <button className="button-secondary">View more</button>
                        </div>
                    </div>
                    <div className="banner-image-container">
                        <img draggable={false} src={bannerImg1} alt="" className="banner-image" />
                        <div className="banner-discount">
                            <h4>only $89</h4>
                        </div>
                    </div>
                </div>

                {/* Banner 2 */}
                <div className="banner-slide">
                    <div className="banner-action-container">
                        <h1>Acer<br />Laptop</h1>
                        <div className="banner-action-btn-container">
                            <button className="button-primary">Shop now</button>
                            <button className="button-secondary">View more</button>
                        </div>
                    </div>
                    <div className="banner-image-container">
                        <img draggable={false} src={bannerImg2} alt="" className="banner-image" />
                        <div className="banner-discount">
                            <h4>only $299</h4>
                        </div>
                    </div>
                </div>

                {/* Banner 3 */}
                <div className="banner-slide">
                    <div className="banner-action-container">
                        <h1>Cotton<br />Jacket</h1>
                        <div className="banner-action-btn-container">
                            <button className="button-primary">Shop now</button>
                            <button className="button-secondary">View more</button>
                        </div>
                    </div>
                    <div className="banner-image-container">
                        <img draggable={false} src={bannerImg3} alt="" className="banner-image" />
                        <div className="banner-discount">
                            <h4>only $9</h4>
                        </div>
                    </div>
                </div>
                

            </ReactSimplyCarousel>
        </div>
    );
};

export default Banner;