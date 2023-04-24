import React from 'react'
// import playStore from '../../../images/google-play-png-logo.png'
// import appStore from '../../../images/app-store-png-logo-33112.png'
import { images } from '../../constants';
import './Footer.scss';
import { AppWrap,MotionWrap } from '../../wrapper'; 

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='leftFooter'>
                <h4>G20</h4>
                <p>Where the world's largest economies come together to discuss global issues and shape the future of the global economy</p>
                <img src={images.logoG20} />
                {/* <img src={playStore} alt='playStore' />
                <img src={appStore} alt='appStore' /> */}
            </div>
            <div className='midFooter'>
                <h1>Code Commandoes Team</h1>
                <p>Vihaan 6.0</p>
                <p>Copyrights 2023 &copy; Himanshu Baurai</p>
            </div>
            <div className='rightFooter'>
                <h4>Follow us on</h4>
                <a href='#'>Instagram</a>
                <a href='#'>Facebook</a>
                <a href='#'>Twitter</a>
            </div>
        </footer>
    )
}


export default Footer