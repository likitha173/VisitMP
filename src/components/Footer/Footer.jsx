import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <section className='f-wrapper'>
            <div className='paddings innerWidth flexCenter f-container'>
                {/* left side */}
                <div className='flexColStart f-left'>
                    <img src="./logo2.png" alt="" width={120}/>

                    <span className='secondaryText'>
                        Explore the beauty of Madhya Pradesh with VisitMP. <br />
                        Your journey to the heart of India begins here.
                    </span>
                </div>

                {/* right side */}
                <div className='flexColStart f-right'>
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>VIT Bhopal, MP, India</span>

                    <div className='flexCenter f-menu'>
                        <span>Regions</span>
                        <span>Travel Tips</span>
                        <span>Contacts</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
