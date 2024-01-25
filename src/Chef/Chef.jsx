import React from 'react'
import './Chef.css'
import SubHeading from '../Components/SubHeading'


const Chef = () => {
  return (
    <div className='app__bg'>
      <div className="app__wrapper-img">
        <img src="images/chef2.jpg" alt="" width={300} />
      </div>
      <div className="app__wrapper-info">
        <SubHeading title="Chef's Word"></SubHeading>
        <h1>What We Believe In</h1>
        <div className='app__chef-content'>
          <div className="app__chef-content_quote">
            <i class="fa-solid fa-quote-left" style={{color:"white",fontSize:"3rem"}}></i>
            <p className='openSans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur impedit numquam tempora aliquid distinctio non ad aperiam tenetur doloribus iure placeat quas, facilis in sit aliquam laboriosam saepe repudiandae vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quisquam, perspiciatis suscipit quis molestias libero quos ullam, nam, tempore quas voluptates in ea quo! Maxime, similique? Vero reprehenderit vitae eligendi!</p>
          </div>
          {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro impedit voluptates provident. Animi eveniet illum fugit consequuntur eius dolorem recusandae maiores quas maxime odit aperiam, fuga id minima dolore ducimus!</p> */}
        </div>
        <div className='app__chef-sign'>
          <p className='font_mont'>Steve Mwangi</p>
          <p className='openSans'>Chef & Founder</p>
          <div></div>
          <p className='sign'> Steve Mwangi</p>
          {/* <img src="" alt="" /> */}
        </div>
      </div>

    </div>
  )
}

export default Chef
