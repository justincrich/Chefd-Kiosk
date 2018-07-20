import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './button_standard.scss';
import classNames from 'classnames';

export default class Button extends Component{
    static defaultProps={
        disabled:false,
        outlined:false,
        style:{},
        className:'',
        external:false,
        target:'_self'
    }
    constructor(props){
        super(props);
        this.state={
            class:''
        }
        this.getClass = this.getClass.bind(this);
    }

    getClass(){
        let {className,outlined,disabled} = this.props;
        let baseStyle = `
        ${outlined ? 'button_outlined':'button_standard'}
        ${disabled ? 'disabled' : ''}
        ${className ? className:''}
        `.trim();
        return baseStyle;
    }


    componentWillMount (){
      let styles = this.getClass();

      this.setState({class:styles})
    }
    

    render(){
        let {disabled,outlined,className,id,external} = this.props;
        let classes = classNames(
            'button',
            {'button_standard':!outlined},
            {'button_outlined':outlined},
            {'disabled':disabled},
            {[`${className}`]:className});
        if(!external){
            return(
                <Link to={{...this.props.to}}
                    onClick={this.props.onClick}
                    className={classes}
                    id={id}
                    style={this.props.style}
                >
                    <div className='button_outlined_font'>
                        {this.props.children}
                    </div>
                </Link>
            )
        }else{
            return (
                <a
                    onClick={this.props.onClick}
                    className={classes}
                    id={id}
                    style={this.props.style}
                    href={this.props.href}
                    target={this.props.target}
                >
                    <div className='button_outlined_font'>
                        {this.props.children}
                    </div>
                </a>
            )
        }
    }
}

Button.propTypes={
    id:propTypes.string,
    href:propTypes.string,
    target:propTypes.string,
    className:propTypes.string,
    style:propTypes.object,
    outlined:propTypes.bool,
    disabled:propTypes.bool,
    to:propTypes.shape({
        pathname:propTypes.string.isRequired,
        search:propTypes.string,
        hash:propTypes.string,
        state:propTypes.object
    })
}
