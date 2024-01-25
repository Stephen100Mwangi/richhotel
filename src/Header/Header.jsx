import React from 'react'
import './Header.css'
import SubHeading from '../Components/SubHeading'

const Header = ({title}) => {
  return (
    <div className='app__header app_wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
       <SubHeading title="Chase the New Flavour" />
       <h1 className='app__header-h1'>The Key to Fine Dining</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta eveniet mollitia id velit delectus sed quos officia voluptas minima soluta numquam, quo fuga maiores, laudantium error vero atque tempore.</p>
       <button>Explore Now</button>
      </div>
      <div className='app__wrapper_img'>
        <img src="images/food2.jpg" width={350} height={350} alt="" />
      </div>
    </div>
  )
}

export default Header