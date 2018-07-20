import React, {Component} from 'react'
import {Router,Route} from 'react-router';
import QuitModal from 'components/quit-modal/quit-modal.js';
import Modal from 'core-components/modals/modal_standard/modal_standard.js'

export default class ModalPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            defaultChecked:false,
            roundChecked:false,
        }

    }



    render(){
        return(
            <div>
                <Modal>
                    <QuitModal/>
                </Modal>
            </div>
        )
    }
}
