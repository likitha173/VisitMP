import React from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import "./Places.css"
import data from '../../utils/Places.json'
import { sliderSettings } from "../../utils/common";
import { color } from 'framer-motion';

const Places = () => {
    return (
        <section className='p-wrapper'>
            <div className='paddings innerWidth p-container'>
                <div className="p-head flexColStart">
                    <span className='orangeText'>Explore Destinations</span>
                    <span className='primaryText'>Uncover Unique Regions</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className='flexColStart p-card'>
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

export default Places;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter p-buttons">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}