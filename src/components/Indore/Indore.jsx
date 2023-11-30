import React from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import "./Indore.css"
import data from '../../utils/Indore.json'
import { sliderSettings } from "../../utils/common";
import { color } from 'framer-motion';

const Bhopal = () => {
    return (
        <section className='i-wrapper'>
            <div className='paddings innerWidth i-container'>
                <div className="i-head flexColStart">
                    <span className='orangeText'>Indore</span>
                    <span className='secondaryText'>Popular Regions in Indore</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className='flexColStart i-card'>
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
        <div className="flexCenter i-buttons">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}