import React, {useState} from 'react'
import Modal from '@material-ui/core/Modal'
import ModalForm from '../Modal/Modal'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {FaTruckLoading, FaTruckMoving, FaTools, FaWarehouse} from 'react-icons/fa'
import './services.sass'

const Services = () => {
    // open modal
    const [open, setOpen] = useState(false)
    const handleOpen = () =>{
        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }

    // Initial State
    const [mainCard, setMainCard] = useState({
        "icon": <FaTools />,
        "title" : "Install & Reconfigure",
        "description": "Short description of the service. Keep It simple, between 2-3 sentences. This would be the third sentence.",
        "cardId": 1
    })

    return (
        <div className='services' id='services'>
            <div className='services-header'>
                <h1>What We Provide</h1>
                <h2>Choose from our variety of services we specialize in.</h2>
            </div>
            <div className='services-body'>
                <div className='services-main-card'>
                    <div>
                        {mainCard["icon"]}
                        <h1>{mainCard["title"]}</h1>
                        <p>{mainCard["description"]}</p>
                        <button onClick={handleOpen}>Get Quote</button>
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
                    </div>
                </div>
                <div className='services-options'>
                    <div 
                        onClick={() => setMainCard({
                            "icon": <FaTools />,
                            "title" : "Install & Reconfigure",
                            "description": "Short description of the service. Keep It simple, between 2-3 sentences. This would be the third sentence.",
                            "cardId": 1
                        })}
                        id={mainCard["cardId"] === 1 ? 'active-card' : null}
                    >
                        <FaTools />
                        <h1>Install & Reconfigure</h1>
                    </div>
                    <div
                        onClick={() => setMainCard({
                            "icon": <FaTruckLoading />,
                            "title" : "Moving & Relocation",
                            "description": "Short description of the service. Keep It simple, between 2-3 sentences. This would be the third sentence.",
                            "cardId": 2
                        })}
                        id={mainCard["cardId"] === 2 ? 'active-card' : null}
                    >
                        <FaTruckLoading />
                        <h1>Moving & Relocation</h1>
                    </div>
                    <div
                        onClick={() => setMainCard({
                            "icon": <FaTruckMoving />,
                            "title" : "Delivery & Pickup",
                            "description": "Short description of the service. Keep It simple, between 2-3 sentences. This would be the third sentence.",
                            "cardId": 3
                        })}
                        id={mainCard["cardId"] === 3 ? 'active-card' : null}
                    >
                        <FaTruckMoving />
                        <h1>Delivery & Pickup</h1>
                    </div>
                    <div
                        onClick={() => setMainCard({
                            "icon": <FaWarehouse />,
                            "title" : "Warehousing & Storage",
                            "description": "Short description of the service. Keep It simple, between 2-3 sentences. This would be the third sentence.",
                            "cardId": 4
                        })}
                        id={mainCard["cardId"] === 4 ? 'active-card' : null}
                    >
                        <FaWarehouse />
                        <h1>Warehousing & Storage</h1>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Services