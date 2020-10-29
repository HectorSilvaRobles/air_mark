import React from 'react'
import './sidedrawer.sass'
import {Link} from 'react-scroll'

export default function SideDrawer(props){
    let drawerClasses = 'drawer'
    console.log(props)
    if(props.show){
        drawerClasses = 'drawer open'
    }


    return (
        <div className={drawerClasses}>
            <Link
                    activeClass='active-menu'
                    to='hero'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={props.close}

                >Home</Link>
                <Link
                    activeClass='active-menu'
                    to='services'
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={props.close}
                >Services</Link>
                <Link
                    activeClass='active-menu'
                    to='portfolio'
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={props.close}

                >Portfolio</Link>
                <Link
                    activeClass='active-menu'
                    to='clients'
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={props.close}

                >Clients</Link>
                <Link
                    activeClass='active-menu'
                    to='aboutUs'
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={props.close}

                >About Us</Link>
        </div>
    )
}