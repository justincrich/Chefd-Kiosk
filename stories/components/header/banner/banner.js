import React, {Component, createElement} from 'react';
import Path from 'path';
import ReactSVG from 'react-svg';
import BannerHeader from 'components/core-components/header/banner/header_banner';
import backgroundImg from 'assets/png/nyt-chk-1-2-hero-raw.png'
import colors from 'styles/_colors.scss'
import Logo from 'assets/png/chefd-logo-white-large-300-dpi.png'

import slogan from 'assets/png/discover-the-culinary-prowess-in-you.png'
import './banner.scss';
export default class HeaderPage extends Component{
    constructor(props){
        super(props)
    }
    createMarkup(){
        return {__html:`${logo.contents}`}
    }
    render(){
        console.log(backgroundImg)
        
        return(
            <div
                
            >
                <BannerHeader
                    backgroundImg={backgroundImg}
                    bannerColor={colors.chefdOrange}
                >

                
                <div className='kiosk_header_banner'>
                    <div
                        className='kiosk_header_banner_logo'
                    >
                        <img
                            
                            src={Logo}
                        />
                    </div>
                    <div
                        className='kiosk_header_banner_slogan'
                    >
                        <img
                            
                            src={slogan}
                        />
                    </div>
                    
                </div>

                
                </BannerHeader>
            </div>
        )
    }
}

