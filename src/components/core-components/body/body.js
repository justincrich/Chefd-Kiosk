import React, {Component} from 'react'
import './body.scss';

export default function Body(props){
    return(
        <div
            style={props.style}
            className={`body_standard ${props.className?props.className:''}`.trim()}
        >
            {props.children}
        </div>
    )
}