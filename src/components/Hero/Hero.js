import React from 'react';
import './hero.sass';

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='hero-shade'>
                <div className='hero-info'>
                    <div className='hero-text'>
                        <h1>Enhance Your Workspace</h1>
                        <h2>We provide the office solutions you need</h2>
                    </div>
                    <div className='hero-button'>
                        <button className='hero-quote'>Get Quote</button>
                        <button className='hero-learn'>Learn More</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero