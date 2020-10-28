import React from 'react'
import Image from '../../../assets/AIR_image2.png'
import './gettoknow.sass'

const GetToKnow = () => {
    return (
        <div className='getToKnow'>
            <div className='getToKnow-body'>
                <img src={Image} />
            </div>
            <div className='getToKnow-header'>
                <h1>Get To Know Us</h1>
                <h2>AIR Office Furniture was founded in 2002 with a mission to provide quality office furniture and impeccable installation services for every type of office space.</h2>
            </div>
        </div>
    )
}

export default GetToKnow