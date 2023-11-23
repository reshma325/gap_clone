import React, { useState } from 'react'
import '../Components/Header.css'
import oldNavy from '../Images/OldNavy.png';
import bag from '../Images/shoppingbag.png'
// import bag from './Icons'


const Header = () => {

    return (
        <div id="header_screen">
            <div id='header_right'>
                <ul >
                    <li> 
                        <img src='https://www.gap.com/Asset_Archive/GPWeb/content/0030/015/725/assets/logo/logo_gap--dark.svg' alt='' /></li>
                    <li>
                        <img src={oldNavy} alt='' />
                    </li>
                    <li>
                        <img src="https://bananarepublic.gap.com/Asset_Archive/BRWeb/content/0016/264/099/assets/BR_Logo_white.svg" alt='' />
                    </li>
                    <li>
                        <img src='https://athletaprod.a.bigcontent.io/v1/static/ATHLETA_logo_white_transparentcopy' alt='' />
                    </li>
                    <li>
                        <img src='https://www.gap.com/Asset_Archive/GPWeb/content/DPG/2V1/2v1-babygap-logo.png' alt='' />
                    </li>
                </ul>
            </div>
            <div id='header_middle'>
                <p id='header_m_text'>Free Shipping on $50+ for Rewards Members <span> SIGN IN OR JOIN </span> <span> DETAILS </span></p>
          
            </div>
            <div id='header_left'>
                <div id='header_left_right'>
                    <div>
                        <div id='signin'>Sign In</div>
                        
                        <div id='youracc'>Your Account</div>

                    </div>
          

                </div>
                
                <div id='header_left_left'>
          <img src={bag}/>
                </div>
            </div>
        </div>
    )
}

export default Header