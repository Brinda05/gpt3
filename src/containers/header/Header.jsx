import React from 'react';
import './header.css';
import group81 from '../../assets/group81.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='first__header section__padding' id='home'>
      <div className='first__header-content'>
        <h1 className='gradient__text'>Let's Make Something amazing this year!</h1>
         <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <div className='first__header-content__input'>
      <input type="email" placeholder='Your Email Address' />
      <button type='button'>Get Started</button>
      </div>
      
      <div className='first__header-content__people'>
         <img src={group81} alt="group81" />
         <p>1,600 people requested access a visit in last 24 hours</p>
      </div>

        
      
      </div>
      <div className= 'first__header-image'>
        <img src={ai} alt="ai" />
      </div> 
    </div>
     
    )
}

export default Header