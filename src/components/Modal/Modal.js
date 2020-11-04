import React, {Component} from 'react'
import View1 from './View1/View1'
import View2 from './View2/View2'
import ThankYou from './thankyou/ThankYou'
import {IoMdClose} from 'react-icons/io'
import {ImArrowLeft} from 'react-icons/im'
import './modal.sass'

export default class Modal extends Component {
    constructor(props){
        super(props)

        this.state = {
            view: 'view1',
            services: [],
            info: {}
        }
    }

    handleServiceSelect = (service) => {
        this.setState({services: service})
    }

    handleInfoUpdate = (info) => {
        this.setState({info: info})
    }

    handleView = (view) => {
        this.setState({view: view})
    }

    render(){
        console.log(this.state)
        console.log(process.env.REACT_APP_NOTIFY_API)
        return (
            <div className={this.state.view === 'thankyou' ? 'modal-thankyou' : 'modal'}>
                {this.state.view === 'thankyou' ? null : 
                    <div className='modal-top'>
                        <div className='modal-top-space'>
                            {this.state.view === 'view2' ? <ImArrowLeft onClick={() => this.handleView('view1')} /> : null}
                        </div>
                        <div className='modal-dots'>
                            <div 
                                onClick={() => this.handleView('view1')} 
                                className={this.state.view === 'view1' ? 'modal-dot-active' : null}
                             />
                            <div 
                                onClick={() => this.handleView('view2')} 
                                className={this.state.view === 'view2' ? 'modal-dot-active' : null} 
                            />
                        </div>
                        <div className='modal-top-space'>
                            <IoMdClose onClick={this.props.onClose} />
                        </div>
                    </div>
                }
                <div className='modal-view'>
                    {this.state.view === 'view1' ? 
                        <View1 
                            state={this.state} 
                            handleService={this.handleServiceSelect} 
                            view={this.handleView} 
                        /> 
                        : 
                        null}
                    {this.state.view === 'view2' ? 
                        <View2
                            view={this.handleView}
                            handleInfo={this.handleInfoUpdate}
                            state={this.state}
                         /> 
                         : 
                         null}
                    {this.state.view === 'thankyou' ? <ThankYou state={this.state} onClose={this.props.onClose} /> : null}
                    
                </div>
            </div>
        )
    }
}