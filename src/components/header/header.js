import React, {Component} from 'react';
import './styling.scss'

//assets
import backgroundPng from '../../assets/png/nyt-chk-1-2-hero-raw.png';
import backgroundPng2x from '../../assets/png/nyt-chk-1-2-hero-raw@2x.png';
import backgroundPng3x from '../../assets/png/nyt-chk-1-2-hero-raw@3x.png';

export default class Header extends Component {
    render(){
        return(
            <div className='header'>
                <div className='header-logo'>
                    <img src={logo} />
                </div>
            </div>
        )
    }
}