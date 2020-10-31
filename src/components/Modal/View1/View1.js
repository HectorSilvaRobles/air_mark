import React, {useState} from 'react'
import {FaTruckLoading, FaTruckMoving, FaTools, FaWarehouse} from 'react-icons/fa'
import './view1.sass'

const View1 = (props) => {
    const [serviceState, setServiceState] = useState([])

    // add service to state just once
    const addToService = (service) => {
        if(!serviceState.includes(service)){
            setServiceState(serviceState.concat(service))
        }  else {
            let removed = serviceState.filter((s) => s !== service) 
            setServiceState(removed)
        }
    }

    console.log(serviceState)
    return (
        <div className='view1'> 
            <div className='view-title'>
                <h1>Select Services</h1>
                <h2>Let us know what you need.</h2>
            </div>
            <div className='view-content'>
                <div 
                    onClick={() => addToService('install & reconfigure office')}
                    className={serviceState.includes('install & reconfigure office') ? 'active-option' : null}
                >
                    <FaTools />
                    <h1>Install & Reconfigure Office</h1>
                </div>
                <div 
                    onClick={() => addToService('furniture delivery & pickup') } 
                    className={serviceState.includes('furniture delivery & pickup') ? 'active-option' : null}
                >
                    <FaTruckMoving />
                    <h1>Furniture Delivery & Pickup</h1>
                </div>
                <div 
                    onClick={() => addToService('office relocation & moving') } 
                    className={serviceState.includes('office relocation & moving') ? 'active-option' : null}

                >
                    <FaTruckLoading />
                    <h1>Office Relocation & Moving</h1>
                </div>
                <div 
                    onClick={() => addToService('warehousing & storage') }
                    className={serviceState.includes('warehousing & storage') ? 'active-option' : null}
                >
                    <FaWarehouse />
                    <h1>Warehousing & Storage</h1>
                </div>
            </div>
            <div className='view-button'>
                <button 
                    className={serviceState.length >= 1 ? 'modal-button-active' : null}
                    disabled={serviceState.length >= 1 ? false : true}
                    onClick={() => {
                        props.handleService(serviceState)
                        props.view('view2')
                    }}
                >Next</button>
            </div>

        </div>
    )
}

export default View1