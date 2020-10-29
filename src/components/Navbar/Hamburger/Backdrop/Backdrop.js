import React from 'react'
import './backdrop.sass'

export default function Backdrop(props){
    return(
        <div className='navbar-backdrop' onClick={props.click} />
    )
}