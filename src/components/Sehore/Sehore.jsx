import React from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import "./Sehore.css"
import data from '../../utils/Sehore.json'
import { sliderSettings } from "../../utils/common";
import { color } from 'framer-motion';

const Bhopal = () => {
    return (
        <section className='s-wrapper'>
            <div className='paddings innerWidth s-container'>
                <div className="s-head flexColStart">
                    <span className='orangeText'>Sehore</span>
                    <span className='secondaryText'>Popular Regions in Sehore</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className='flexColStart s-card'>
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