import React from 'react'
import {IoMdClose} from 'react-icons/io'
import './thankyou.sass'

const ThankYou = (props) => {
    return (
        <div className='thankyou'>
            <div className='thankyou-title'>
                <div onClick={() => props.onClose()}><IoMdClose /></div>
            </div>
            <div className='thankyou-body'>
                <h1>Thank You.</h1>
                <h2>One of our representatives will soon be in contact.</h2>
            </div>
            <div className='thankyou-title' />
        </div>
    )
}

export default ThankYou