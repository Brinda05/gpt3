import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='first__footer section__padding'>
      <div className='first__footer-heading'>
         <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='first__footer-btn'>
       <p>Request Early Access</p>
      </div>
      <div className='first__footer-links'>
       <div className='first__footer-links_logo'>
        <img src={logo} alt="logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
       </div>
       <div className='first__footer-links_div'>
         <h4>Links</h4>
         <p>Overons</p>
         <p>Social Media</p>
         <p>Overons</p>
         <p>Contacts</p>
       </div>
       <div className='first__footer-links_div'>
         <h4>Company</h4>
         <p>Overons</p>
         <p>Social Media</p>
         <p>Overons</p>
       </div>
       <div className='first__footer-links_div'>
         <h4>Get in touch</h4>
         <p>Overons</p>
         <p>Social Media</p>
         <p>Crechterwoord K12 182 DK Alknjkcb</p>
       </div>
      </div>

      <div className='first__footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer