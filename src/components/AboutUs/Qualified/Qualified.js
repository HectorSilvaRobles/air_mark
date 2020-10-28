import React from 'react'
import Image from '../../../assets/AIR_image3.png'
import './qualified.sass'

const Qualified = () => {
    return (
        <div className='qualified'>
            <div className='qualified-header'>
                <h1>We Are Qualified</h1>
                <h2>Our team has 30+ years of experience working with major office furniture dealers and companies headquartered in Arizona.</h2>
            </div>
            <div className='qualified-body'>
                <img src={Image} />
            </div>
        </div>
    )
}

export default Qualified