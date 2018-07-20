import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './button_anchor.scss';
export default class AnchorButton extends Component{
    static defaultProps={
        disabled:false,
        outlined:false,
    }
    constructor(props){
        this.state = {}

    }

    render(){
        if(this.props.external){
            return(
                <a
                    onClick={this.props.onClick}
                    target={this.props.target}
                    href={this.props.href}
                >
                    {this.props.children}
                </a>
            )
        }else{
            return(
                <Link>{this.props.children}</Link>
            )
        }
    }
}

Button.propTypes={
    //general react props
    bodyClassName:propTypes.string,
    outlined:propTypes.bool,
    bodyStyle:propTypes.string,
    fontStyle:propTypes.string,
    bodyStyle:propTypes.shape({
        background:propTypes.string,
        width:propTypes.string,
        height:propTypes.string,
    }),
    fontStyle:propTypes.shape({
        background:propTypes.string,
        width:propTypes.string,
        height:propTypes.string,
    }),
    //general tag attributes
    data:propTypes.object,
    name:propTypes.string,
    type:propTypes.string,
    value:propTypes.string,
    //button attributes
    autofocus:propTypes.bool,
    disabled:propTypes.bool,
    form:propTypes.string,
    formaction:propTypes.string,
    formmethod:propTypes.string,
    formnovalidate:propTypes.bool,
    formtarget:propTypes.string,
    //anchor attributes
    download:propTypes.string,
    href:propTypes.string,
    hreflang:propTypes.string,
    ping:propTypes.string,
    referrerpolicy:propTypes.oneOf([
        'no-referrer',
        'no-referrer-when-downgrade',
        'origin',
        'origin-when-cross-origin',
        'unsafe-url'
    ]),
    rel:propTypes.oneOf([
        'alternate',
        'author',
        'bookmark',
        'canonical',
        'dns-prefetch',
        'external',
        'help',
        'icon',
        'license',
        'manifest',
        'next',
        'nofollow',
        'noopener',
        'noreferrer',
        'pingback',
        'preconnect',
        'prefetch',
        'preload',
        'prerender',
        'prev',
        'search',
        'stylesheet',
        'sidebar',
        'tag',

    ]),
    target:propTypes.string,

}