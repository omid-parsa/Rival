import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='home-page'>
        
            <figure className="hero-container">
                <img src={require('../../assets/img/hero5.jpg')} className='hero-image' alt='new product'/>
                {/* <img src={require('../../assets/img/hero5.jpg')} className='hero-image' alt='new product'/> */}
                {/* <figcaption className='hero-caption'>Best option for all seasons</figcaption> */}
            </figure>
      
    </div> 
);

export default HomePage;