import React from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import "./Ujjain.css"
import data from '../../utils/Ujjain.json'
import { sliderSettings } from "../../utils/common";
import { color } from 'framer-motion';

const Bhopal = () => {
    return (
        <section className='u-wrapper'>
            <div className='paddings innerWidth u-container'>
                <div className="u-head flexColStart">
                    <span className='orangeText'>Ujjain</span>
                    <span className='secondaryText'>Popular Regions in Ujjain</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className='flexColStart u-card'>
                                    <img src={card.image} alt="home" />

                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.type}</span>
                                    <span className='seconaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Bhopal;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter u-buttons">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}