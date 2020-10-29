import React from 'react'
import './togglebutton.sass'

export default function ToggleButton(props){
    return (
        <button className='toggle' onClick={props.click}>
            <div className='toggle-button'></div>
            <div className='toggle-button'></div>
            <div className='toggle-button'></div>
        </button>
    )
}