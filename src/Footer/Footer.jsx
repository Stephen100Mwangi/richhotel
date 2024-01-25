import React from 'react'
import './Footer.css'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import SubHeading from '../Components/SubHeading'

const Footer = () => {
  return (
    <div className='app__footer'>
      {/* Footer Overlay */}
      {/* Subscribe */}
      <div className='newsLetter'>
      <SubHeading title="NewsLetter"></SubHeading>
      <h1 className='cormorant'>Subscribe to Our News Letter</h1>
      <p className='opensans'>And Never Miss Latetst Updates.</p>
      <form>
        <input type="email" placeholder='Enter your email Address' />
        <button className='simpleButton'>Subscribe</button>
      </form>
      </div>

      <div className="footer">
        <div className="address">
          <p className='opensans'>15 &deg; E  45 <sup>th</sup> St Nairobi, NRB</p>
          <p className='opensans'>254, Kenya</p>
          <p className='opensans'>+254758725032</p>
          <p className='opensans'>+254200245090</p>
        </div>
        <div className='footer__logo'>
          <h1>E🥂TE🍗Y</h1>
          <SubHeading className='footerSub' title="The Best Way To find Yourself is To Lose yourself in The Service Of Others"></SubHeading>
        </div>
        <div className='workHours'>
          <p className='cormorant'>Monday - Friday</p>
          <p className='opensans'>08:00 am - 04:00 pm</p>
          <p className='cormorant'>Saturday - Sunday</p>
          <p className='opensans'>12:00 pm - 07:00 pm</p>
        </div>

      </div>
      <div className="footer__links">
        <FiInstagram color='#ffff' cursor="pointer"></FiInstagram>
        <FiTwitter color='#ffff' cursor="pointer"></FiTwitter>
        <FiFacebook color='#ffff' cursor="pointer"></FiFacebook>
      </div>
      <p className='opensans' style={{textAlign:"center"}}>2024 Steve Mwangi &copy; Copyright All Rights Reserved</p>
    
    </div>
  )
}

export default Footer
