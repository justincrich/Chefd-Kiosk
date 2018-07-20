import React, { Component } from 'react';
import propTypes from 'prop-types';
import './input_checkbox_standard.scss'
import colors from '../../../../../styles/_colors.scss';

export default class Checkbox extends Component{
    static defaultProps={
        className:'',
        bodyClassName:'',
        iconSize:'lg',
        iconClassName:'',
        checked:false,
        hoverable:false
    }
    constructor(props){
        super(props);
        this.state={
            isHovering:false,
            checked:false
        }

        
    }




    render(){
        const {checked} = this.props;
        const boxStyle ={
            border:`1px solid ${checked?'transparent':colors.inputBorderColor}`
        }


        return(
            <div 
                style={{
                    ...boxStyle,
                    ...this.props.checkboxStyle
                }}
                className={
                    `input_checkbox_standard
                        ${this.props.checked?'checked':''} 
                        ${this.props.required?'required':''}
                        ${this.props.disabled?'disabled':''}
                        ${this.props.className}
                    `.trim()
                }
                onClick={this.props.onClick}
                onMouseEnter={this.props.hoverToggle}
                onMouseLeave={this.props.hoverToggle}
                
            >
                <input
                    type='checkbox'
                    value={this.props.value}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    checked={this.props.checked}
                />
                {
                    this.props.icon?
                    (
                        <i 
                            className={`${this.props.iconClassName} fa fa-${this.props.icon} fa-${this.props.iconSize}`}
                            style={this.props.iconStyle} 
                            aria-hidden="true"
                            onClick={this.check}
                        >
                        </i>
                    )
                    :
                    (
                        <span/>
                    )
                }
            </div>
        )
    }


}

Checkbox.propTypes={
    
    icon:propTypes.string,
    iconSize:propTypes.oneOf([
        'lg',
        '2x',
        '3x',
        '4x',
        '5x'
    ]),
    bodyStyle:propTypes.object,
    checkboxStyle:propTypes.object,
    iconStyle:propTypes.object,
    name:propTypes.string,
    className:propTypes.string,
    bodyClassName:propTypes.string,
    iconClassName:propTypes.string,
    id:propTypes.string,
    value:propTypes.string,
    checked:propTypes.bool.isRequired,
    required:propTypes.bool,
    onChange:propTypes.func,
    disabled:propTypes.bool,
    onClick:propTypes.func.isRequired,
    hoverToggle:propTypes.func

}