import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';

const socialMedia = () => {
  return (
    <div className='app__social'>
         <div>
          <a href="https://twitter.com/dkshatree88" target='blank'>
          <BsTwitter/>
          </a>
            
        </div> 

          <div>
            <a href="https://www.facebook.com/driscoll.thapa/" target='blank'>
              <FaFacebookF />
            </a>
            
        </div> 

          <div>
            <a href="https://www.instagram.com/__driscoll_thapa7__/" target='blank'>
            <BsInstagram/>
            </a>
            
        </div>   
    </div>
  )
}

export default socialMedia