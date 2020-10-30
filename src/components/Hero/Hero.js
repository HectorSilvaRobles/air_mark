import React, {useState} from 'react';
import {Link} from 'react-scroll'
import Modal from '@material-ui/core/Modal'
import ModalForm from '../Modal/Modal'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './hero.sass';

const Hero = () => {
    // open modal
    const [open, setOpen] = useState(false)
    const handleOpen = () =>{
        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }

    return (
        <div className='hero' id='hero'>
            <div className='hero-shade'>
                <div className='hero-info'>
                    <div className='hero-text'>
                        <h1>Enhance Your Workspace</h1>
                        <h2>We provide the office solutions you need</h2>
                    </div>
                    <div className='hero-button'>
                        <button 
                            className='hero-quote'
                            onClick={handleOpen}
                        >Get Quote</button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            className={'modal-backdrop'}
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >   
                            <Fade in={open}>
                                <ModalForm onClose={handleClose} />
                            </Fade>
                        </Modal>
                        <Link
                            to='services'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <button className='hero-learn'>Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero