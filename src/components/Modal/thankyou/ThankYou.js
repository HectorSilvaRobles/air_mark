import React, {useEffect} from 'react'
import {IoMdClose} from 'react-icons/io'
import axios from 'axios'
import './thankyou.sass'

const ThankYou = (props) => {
    // Send notification to Mark
    useEffect(() => {
        axios.post(process.env.REACT_APP_NOTIFY_API, props.state)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])

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