import React from 'react';
import './GetStarted.css'

const GetStarted = () => {
    return (
        <section className='g-wrapper'>
            <div className='paddings innerWidth g-container'>
                <div className='flexColCenter inner-container'>
                    <span className='primaryText'>Explore Madhya Pradesh with VisitMP</span>
                    <span className='secondaryText'>Subscribe to our newsletter and discover amazing travel.
                        <br />
                        Start your journey to the heart of India today!
                    </span>
                    <button className='button'>
                        <a href="mailto:xxxxxxxx@gamil.com">Get Started</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
