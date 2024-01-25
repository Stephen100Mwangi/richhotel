import React from 'react'
import SubHeading from '../Components/SubHeading'
import './FindUs.css'

const FindUs = () => {
  return (
    <div className='app__findUs' id='contact'>
      <div className="app__wrapper_info">
        <SubHeading title="Contact"/>
        <h1 className='cormorant'>Find Us</h1>
        <div>
          <p className='opensans'>Lane Ends</p>
          <p className='cormorant'>Opening Hours</p>
          <p className='opensans'>Mon - Fri: 10:00 am - 02:00 pm</p>
          <p className='opensans'>Sat - Sun: 12:00 am - 06:00 pm</p>
        </div>
        <button className='simpleButton'>Visit Us</button>

      </div>
      <div className='app__wrapper_img'>
        <img src="images/image10.jpg" alt="" />

      </div>
      
    </div>
  )
}

export default FindUs
