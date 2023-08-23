import React from 'react';
import { images } from '../../constants';
import './Footer.css';

import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';


const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h4 className="p__cormorant">Contact Us</h4>
        <p className="p__opensans" style={{opacity: '0.5'}}>9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans" style={{opacity: '0.5'}}>+1 212-344-1230 <br/> +1 212-555-1230</p>
        
      </div>
      
      <div className="app__footer-links_logo">
          <h3 className="headtext__cormorant">Gerícht</h3>
          <p className="p__opensans" >"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img src={images.spoon} alt="spoon" />
          <div className="app__footer-links_logo_social">
            <FiFacebook className='icons' />
            <FiTwitter className='icons'/>
            <FiInstagram className='icons'/>
          </div>
      </div>

      <div className="app__footer-links_contact">
        <h4 className="p__cormorant ">Working Hours</h4>
        <p className="p__opensans" style={{opacity: '0.5'}}>Monday-Friday: <br/>08:00 am -12:00 am</p>
        <p className="p__opensans" style={{opacity: '0.5'}}>Saturday-Sunday:<br/>07:00am -11:00 pm<br/> +1 212-555-1230</p>
      </div>

    </div>
    
    <div className="footer_copyright">
    <p className="p__opensans" style={{opacity: '0.5'}}>2021 Gerícht. All Rights reserved. Create by Rogerio as a learning portfolio</p>
    </div>
  </div>
);

export default Footer;
