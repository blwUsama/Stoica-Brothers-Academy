import React from 'react'
import './styles/Footer.css'
import pin_icon from './images/pin-icon.png'
import mail_icon from './images/mail-icon.png'
import phone_icon from './images/phone-icon.png'
import facebook_icon from './images/facebook-icon.png'
import youtube_icon from './images/youtube-icon.png'
import instagram_icon from './images/instagram-icon.png'

function Footer()
{
    return(
        <div className='footer'>
        <div className='line'> 
          <img src={pin_icon} alt='pin'/>
          <p> Bulevardul Ghencea 134, București</p>
        </div>

        <div className='line'> 
          <img src={pin_icon} alt='pin'/>
          <p> Aleea Zorelelor nr. 13 / Strada Răsăritului nr 3, București</p>
        </div>

        {/* <div className='line'> 
          <img src={mail_icon} alt='mail'/>
          <p> balawiu@gmail.com </p>
        </div> */}

        <div className='line'> 
          <img src={phone_icon} alt='phone'/>
          <p> 0737 022 239 </p>
        </div>

        <div className='social-links'>
          <hr></hr>
          <a href='https://www.facebook.com/StoicaBrothersFA/' target="_blank" rel="noopener noreferrer"> <img src={facebook_icon} alt='facebook'/> </a>
          <a href='https://www.youtube.com/@AndreiStoica1' target="_blank" rel="noopener noreferrer"> <img src={youtube_icon} alt='youtube'/> </a>
          <a href='https://www.instagram.com/teamstoica/' target="_blank" rel="noopener noreferrer"> <img src={instagram_icon } alt='instagram'/> </a>
        </div>
      </div>
    )
}

export default Footer;