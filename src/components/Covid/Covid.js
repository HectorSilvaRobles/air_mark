import React from 'react'
import CovidImg from '../../assets/AIR_image1.png'
import './covid.sass'

const Covid = () => {
    return (
        <div className='covid'>
            <div className='covid-header'>
                <h1>The New Office</h1>
                <h2>We make sure to prepare a safe work environment in the age of COVID-19.</h2>
            </div>
            <div className='covid-body'>
                <img src={CovidImg} />
            </div>
        </div>
    )
}

export default Covid