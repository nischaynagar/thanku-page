import React from 'react';
import Logo from "./components/assests/images/logo.svg";
import whatsappIcon from "./components/assests/images/icon-whatsapp.svg";
import telegramIcon from "./components/assests/images/icon-telegram.svg";
import igIcon from "./components/assests/images/icon-ig.svg"
import linkedInIcon from "./components/assests/images/icon-linkedIn.svg"
import twitterIcon from "./components/assests/images/icon-twitter.svg"
import telegramVectorIcon from "./components/assests/images/icon-telegram-vector.svg"
import emailIcon from "./components/assests/images/icon-email.svg"
import thumbsUpIcon from "./components/assests/images/icon-thumbsUp.svg";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="logo cursor-pointer" >
          <img src={Logo} alt =""/>
          <p className='header-title'>MATRIX LABS</p>
        </div>
      </div>
          <img className='thumbsup-icon' src={thumbsUpIcon} alt = "thumbsup-icon"/>
      <div className='content-wrapper'>
        <div className='thanku-wrapper'>
          <div className='thanku-txt'>
              <span className='highlighted'>
                  Thank you 
              </span>
              {" "}for signing up
          </div>
          <p>We have received your details, our team will contact you shortly</p>
        </div>
        <div className='contactUs-txt'>Can’t wait? Contact us 
          <span className='highlighted'>
           {" "}NOW
          </span>
        </div>
        <div className='contacts-div'>
          <a href="https://wa.me/+917999378952">
            <img src={whatsappIcon} alt="whatsapp-icon"/>
          </a>
          <a href="https://t.me/brickMatrix">
            <img src={telegramIcon} alt="telegram-icon"/>
          </a>
        </div>
      </div>
      <div className="main-footer">
            <div className="footer-logo-div">
                <div className='footer-logo-wrapper'>
                    <div className="title">
                        <img src={Logo} alt =""/>
                        <p>MATRIX LABS</p>
                    </div>
                    <div className="title-desc">One stop for all Blockchain solutions</div>
                </div>
                <div className="socials">
                    <div>Reach out to us:</div>
                    <div className="social-icon-div">
                        <a href='https://instagram.com/thematrixlabs.eth?igshid=NDk5N2NlZjQ='>
                          <img src={igIcon} className="social-icons" alt="ig-icon" />
                        </a>
                        <a href='https://www.linkedin.com/company/thematrixlabs/'>
                          <img src={linkedInIcon} className="social-icons" alt="linkedIn-icon"/>
                        </a>
                        <a href='https://twitter.com/TheMatrixLabs?t=WI-bvQduDTmbcLZ-ikyrbg&s=09'>
                          <img src={twitterIcon} className="social-icons" alt="twitter-icon"/>
                        </a>
                        <a href="https://t.me/brickMatrix">
                          <img src={telegramVectorIcon} className="social-icons" alt="telegram-icon"/>
                        </a>
                        <a href="mailto:contact@thematrixlabs.com">
                          <img src={emailIcon} className="social-icons" alt="email-icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
