import React from 'react'
import GetToKnow from './GetToKnow/GetToKnow'
import Qualified from './Qualified/Qualified'
import './aboutus.sass'

const AboutUs = () => {
    return (
        <div className='aboutus'>
            <GetToKnow />
            <Qualified />
        </div>
    )
}

export default AboutUs