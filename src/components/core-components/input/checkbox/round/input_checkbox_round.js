import React from 'react'
import Checkbox from '../standard/input_checkbox_standard'
import propTypes from 'prop-types'

import colors from 'styles/_colors.scss'
const checkboxStyling = {
    backgroundColor:colors.buttonBodyColorLightBkg,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    boxShadow:'0px 3px 8px 0 rgba(0, 0, 0, 0.17)',
    width:'61px',
    height:'61px',
    borderRadius:'50%',
    appearance:'none',
    cursor:'pointer'
}
const iconStyling = {
    fontFamily:'FontAwesome',
    fontSize:'38px',
    fontWeight:'normal',
    fontStyle:'normal',
    textAlign:'center'
}
export default class RoundCheckbox extends React.Component{
    static defaultProps={
        hoverable:false,

    }
    constructor(props){
        super(props);
        this.state={
            isHovering:false,
        }
        this.toggleHover = this.toggleHover.bind(this);
        this.setIconColor = this.setIconColor.bind(this);
    }
    toggleHover(){
        this.setState({isHovering:!this.state.isHovering})
    }
    setIconColor(){
        let style = {};
        if(this.props.checked){
            style.color=colors.chefdOrange
        }else if(
            this.props.checked
            ||
            (this.props.hoverable 
            && 
            this.state.isHovering)
            ){
            style.color = colors.chefdOrange
        }else{
            style.color = colors.iconLightBkgMuted;
        }

        return style
    }
    render(){
        return (
            <Checkbox
                className={this.props.className}
                checkboxStyle={{
                    ...checkboxStyling,
                    border:`1px solid ${colors.inputBorderColor}`,
                    ...this.props.style
                }}
                iconStyle={
                    {
                        ...iconStyling,
                        ...this.setIconColor(),
                    }
                }
                value={this.props.value}
                required={this.props.required}
                checked={this.props.checked}
                disabled={this.props.disabled}
                hoverable={this.props.hoverable}
                onClick={this.props.onClick}
                icon={'check'}
                iconClassName={'input_checkbox_icon_check'}
                hoverToggle={this.toggleHover}
    
            >
                {this.props.checkbox}
            </Checkbox>
        )
    }
}

Checkbox.PropTypes={
    style:propTypes.object,
    name:propTypes.string,
    className:propTypes.string,
    id:propTypes.string,
    value:propTypes.string.isRequired,
    required:propTypes.bool,
    checked:propTypes.func.isRequired,
    onClick:propTypes.func.isRequired,
    disabled:propTypes.bool,
    hoverable:propTypes.bool
}