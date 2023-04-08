import React, { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import './FeaturedCategories.css'

const FeaturedCategories = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    return (
        <div className="featured-products">
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
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
                    //here you can also pass className, or any other button element attributes
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
                // dotsNav={{
                //     show: true,
                //     itemBtnProps: {
                //       style: {
                //         height: 16,
                //         width: 16,
                //         borderRadius: "50%",
                //         border: 0,
                //         border: '1px solid #ADADAD',
                //         backgroundColor: '#FFFFFF',
                //         marginRight: '4px'
                //       }
                //     },
                //     activeItemBtnProps: {
                //       style: {
                //         height: 16,
                //         width: 16,
                //         borderRadius: "50%",
                //         border: 0,
                //         background: "#EDA415",
                //         marginRight: '4px'
                //       }
                //     }
                //   }}
                speed={400}
                easing="linear"
            >
                {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                <div className='car-slide'>
                    <div className="box">
                        slide 0
                    </div>
                </div>
                <div style={{ width: 380, height: 300, background: '#065535' }}>
                    slide 1
                </div>
                <div style={{ width: 380, height: 300, background: '#000000' }}>
                    slide 2
                </div>
                <div style={{ width: 380, height: 300, background: '#133337' }}>
                    slide 3
                </div>
                <div style={{ width: 380, height: 300, background: '#ffc0cb' }}>
                    slide 4
                </div>
                <div style={{ width: 380, height: 300, background: '#ffffff' }}>
                    slide 5
                </div>
                <div style={{ width: 380, height: 300, background: '#ffe4e1' }}>
                    slide 6
                </div>
                <div style={{ width: 380, height: 300, background: '#008080' }}>
                    slide 7
                </div>
                <div style={{ width: 380, height: 300, background: '#ff0000' }}>
                    slide 8
                </div>
                <div style={{ width: 380, height: 300, background: '#e6e6fa' }}>
                    slide 9
                </div>
            </ReactSimplyCarousel>
        </div>
    );
};

export default FeaturedCategories;