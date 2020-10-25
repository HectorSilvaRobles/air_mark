import React, {useState} from 'react'
import {FaTruckLoading, FaTruckMoving, FaTools, FaWarehouse} from 'react-icons/fa'
import './services.sass'

const Services = () => {
    const [mainCard, setMainCard] = useState({
        "icon": <FaTools />,
        "title" : "Office Installation & Reconfiguration",
        "description": "Short description of the service. Keep It simple, between 2-3 sentences. This would be the third sentence.",
        "cardId": 1
    })

    return (
        <div className='services'>
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
                        <button>Get Quote</button>
                    </div>
                </div>
                <div className='services-options'>
                    <div 
                        onClick={() => setMainCard({
                            "icon": <FaTools />,
                            "title" : "Office Installation & Reconfiguration",
                            "description": "Short description of the service. Keep It simple, between 2-3 sentences. This would be the third sentence.",
                            "cardId": 1
                        })}
                        id={mainCard["cardId"] === 1 ? 'active-card' : null}
                    >
                        <FaTools />
                        <h1>Office Installation & Reconfiguration</h1>
                    </div>
                    <div
                        onClick={() => setMainCard({
                            "icon": <FaTruckLoading />,
                            "title" : "Office Moving & Relocation",
                            "description": "Short description of the service. Keep It simple, between 2-3 sentences. This would be the third sentence.",
                            "cardId": 2
                        })}
                        id={mainCard["cardId"] === 2 ? 'active-card' : null}
                    >
                        <FaTruckLoading />
                        <h1>Office Moving & Relocation</h1>
                    </div>
                    <div
                        onClick={() => setMainCard({
                            "icon": <FaTruckMoving />,
                            "title" : "Commercial Delivery & Pickup",
                            "description": "Short description of the service. Keep It simple, between 2-3 sentences. This would be the third sentence.",
                            "cardId": 3
                        })}
                        id={mainCard["cardId"] === 3 ? 'active-card' : null}
                    >
                        <FaTruckMoving />
                        <h1>Commercial Delivery & Pickup</h1>
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