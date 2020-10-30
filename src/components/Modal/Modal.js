import React, {Component} from 'react'
import View1 from './View1/View1'
import View2 from './View2/View2'
import {IoIosCloseCircleOutline} from 'react-icons/io'
import './modal.sass'

export default class Modal extends Component {
    constructor(props){
        super(props)

        this.state = {
            view: 'view1'
        }
    }

    render(){
        console.log(this.state.view)
        return (
            <div className='modal'>
                <div className='modal-top'>
                    <div className='modal-top-space'></div>
                    <div className='modal-dots'>
                        <div onClick={() => this.setState({view: 'view1'})} className={this.state.view === 'view1' ? 'modal-dot-active' : null}></div>
                        <div onClick={() => this.setState({view: 'view2'})} className={this.state.view === 'view2' ? 'modal-dot-active' : null}></div>
                    </div>
                    <div className='modal-top-space'>
                        <IoIosCloseCircleOutline onClick={this.props.onClose} />
                    </div>
                </div>
                
                <div className='modal-view'>
                    {this.state.view === 'view1' ? <View1 /> : <View2 />}
                </div>
            </div>
        )
    }
}