import React, {Component} from 'react';
import propTypes from 'prop-types';
import './header_banner.scss';
import colors from 'styles/_colors.scss'
export default class BannerHeader extends Component{
    static defaultProps={
        bannerColor:colors.chefdOrange,
        headerClassName:'',
        bannerClassName:'',
        contentsClassName:''
    }

    render(){
        const {
            headerClassName, bannerClassName,contentsClassName,
            headerStyle, bannerStyle, contentsStyle,
            backgroundImg,
            bannerColor,
            children
        
        } = this.props;
        return(
            <div 
                className={`header_banner ${headerClassName}`}
                style={{
                    headerStyle,
                    
                }}
            >
                
                <div
                    className={`header_banner_banner_container ${bannerClassName}`}
                    style={bannerStyle}
                >
                    <div
                        className='header_banner_banner_container_wrapper'
                    >
                        <div 
                            className={`header_banner_contents ${contentsClassName}`}
                            style={contentsStyle}
                        >
                            {children}
                        </div>

                        <div 
                            className={'header_banner_background'}
                            style={{backgroundColor:bannerColor}}
                        />
                    </div>
                </div>
                <img src={backgroundImg} className='header_banner_img' alt='Chefd Meal Kits'/>
            </div>
        )
    }
}

BannerHeader.propTypes = {
    backgroundImg:propTypes.any.isRequired,
    bannerColor:propTypes.string,
    headerStyle:propTypes.object,
    bannerStyle:propTypes.object,
    contentsStyle:propTypes.object,
    headerClassName:propTypes.string,
    bannerClassName:propTypes.string,
    contentsClassName:propTypes.string
}