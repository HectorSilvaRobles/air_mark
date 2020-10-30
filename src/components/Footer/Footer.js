import React from 'react';
import {Link} from 'react-scroll'
import './footer.sass'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-cta'>
                <h1>Interested? Lets Begin.</h1>
                <button>Get Quote</button>
            </div>
            <div className='footer-menu'>
                <div className='footer-logo'></div>
                <Link
                    activeClass='active-menu'
                    to='hero'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                >Home</Link>
                <Link
                    activeClass='active-menu'
                    to='services'
                    spy={true}
                    smooth={true}
                    duration={500}
                    // offset={-70}
                >Services</Link>
                <Link
                    activeClass='active-menu'
                    to='portfolio'
                    spy={true}
                    smooth={true}
                    duration={500}
                    // offset={-70}
                >Portfolio</Link>
                <Link
                    activeClass='active-menu'
                    to='clients'
                    spy={true}
                    smooth={true}
                    duration={500}
                    // offset={-70}
                >Clients</Link>
                <Link
                    activeClass='active-menu'
                    to='aboutUs'
                    spy={true}
                    smooth={true}
                    duration={500}
                    // offset={-70}
                >About Us</Link>
            </div>
        </div>
    )
}


export default Footer