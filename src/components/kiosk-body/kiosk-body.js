import React from 'react';
import './kiosk-body.scss';
import colors from "styles/_colors.scss";
import Logo from "assets/png/chefd-logo-white-large-300-dpi.png";
import slogan from "assets/png/discover-the-culinary-prowess-in-you.png";
import BannerHeader from "components/core-components/header/banner/header_banner";
import backgroundImg from "assets/png/nyt-chk-1-2-hero-raw.png";

export default function KioskBody(props){

    return(
        <div className="kiosk_body">
            <BannerHeader
                backgroundImg={backgroundImg}
                bannerColor={colors.chefdOrange}
                headerClassName={"kiosk_start_header"}
            >
                <div className="kiosk_header_banner">
                    <div className="kiosk_header_banner_logo">
                    <img src={Logo} alt="Chef'd"/>
                    </div>
                    <div className="kiosk_header_banner_slogan" >
                    <img src={slogan} alt="Discover the culinary prowess in you!"/>
                    </div>
                </div>
            </BannerHeader>
            <div className='kiosk_contents'>
                {props.children}
            </div>
        </div>
    )
}