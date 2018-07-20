import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Button from '../standard/button_standard';
//import * as sassVars from '!!sass-variable-loader!../../../../styles'
import colors from '../../../../styles/_colors.scss';
import './button_check.scss';

export default class CheckButton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(

           <Button
            bodyStyle={{
                backgroundColor:colors.buttonBodyColorLightBkg,
                boxShadow:'0px 3px 8px 0 rgba(0, 0, 0, 0.17)',
                width:'61px',
                height:'61px',
                borderRadius:'50%'
            }}
           >
            <i className="fa fa-check button_check_contents" aria-hidden="true"></i>
           </Button> 
        )
    }
}