import React from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import "./Bhopal.css"
import data from '../../utils/slider.json'
import { sliderSettings } from "../../utils/common";
import { color } from 'framer-motion';

const Bhopal = () => {
    return (
        <section className='b-wrapper'>
            <div className='paddings innerWidth b-container'>
                <div className="b-head flexColStart">
                    <span className='orangeText'>Bhopal</span>
                    <span className='secondaryText'>Popular Regions in Bhopal</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className='flexColStart b-card'>
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
        <div className="flexCenter b-buttons">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}