import React, {useState} from 'react'
import {Link} from 'react-scroll'
import Backdrop from './Hamburger/Backdrop/Backdrop'
import SideDrawer from './Hamburger/SideDrawer/SideDrawer'
import ToggleButton from './Hamburger/Togglebutton/ToggleButton'
import Logo from '../../assets/logo.png'
import './navbar.sass'

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    // For toggling hamburger menu
    const drawerToggleClick = () => {
        setDrawerOpen(!drawerOpen)
    }
    
    const backdropClick = () => {
        setDrawerOpen(false)
    }

    console.log(drawerOpen)

    return (
        <div className='navbar'>
            <div className='navbar-logo'><img src={Logo} /></div>
            <div className='navbar-menu'>
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
            <div className='togglebutton'>
                <ToggleButton click={drawerToggleClick} />
                <SideDrawer show={drawerOpen} close={drawerToggleClick} />
                {drawerOpen !== false ? <Backdrop click={backdropClick} /> : null}
            </div>
        </div>
    )
}

export default Navbar