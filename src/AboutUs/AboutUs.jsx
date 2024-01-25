import React from 'react'
import './AboutUs.css'
import { GiKnifeFork, GiSpoon } from 'react-icons/gi'

const AboutUs = () => {
  return (
    <div className='app__about app__bg flex_center padding' id='about'>
      <div className="app__about-content">
        <div className="app__about-content-about">
          <h1 className='text'>About Us</h1>
          {/* <img src="" alt="spoon" /> */}
          <GiSpoon color='#ffffff'></GiSpoon>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, dolorem est. Rem veritatis consectetur facere non vitae, eum provident incidunt veniam quaerat magnam explicabo reprehenderit eius distinctio eveniet eaque illo?</p>
          <button type='button'>Know More</button>
        </div>
        <div className="knife">
          <img src="" alt="" />
          <GiKnifeFork color='#ffffff' width={100} height={400} className='knife'></GiKnifeFork>
        </div>

        <div className="app__about-content-history">
          <h1 className='text'>Our History</h1>
          <GiSpoon color='#ffffff'></GiSpoon>
          {/* <img src="" alt="spoon" /> */}
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, dolorem est. Rem veritatis consectetur facere non vitae, eum provident incidunt veniam quaerat magnam explicabo reprehenderit eius distinctio eveniet eaque illo?</p>
          <button type='button'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
