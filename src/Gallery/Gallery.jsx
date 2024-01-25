import React from 'react'
import { BsInstagram,BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs'
import SubHeading from '../Components/SubHeading'
import './Gallery.css'

const Gallery = () => {
  const scrollRef = React.useRef(null);

  // To facilitate scrolling
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left'){
      current.scrollLeft += 300;
    }else{
      current.scrollLeft -= 300;
    }
  }
  return (
    <div className='app__gallery'>
      <div className="app__gallery-text">
        <SubHeading title="Instagram"/>
        <h1 className='cormorant'>Photo Gallery</h1>
        <p className='opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam modi ad id aliquid eligendi. Fugiat quam velit, aut ipsum dolorum, nesciunt et, dolorem facilis impedit deleniti voluptatibus error fuga adipisci eos minima saepe illo facere quisquam iure beatae! Dicta reprehenderit natus quasi totam voluptatem nesciunt eligendi placeat exercitationem molestias tenetur.</p>
        <button type='button' className='simpleButton'>View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className="app__gallery-images_container" ref={scrollRef}>
          <div className='app__gallery-images_card'>
            <img src="images/image1.jpg" alt="" />
          </div>
          <div className='app__gallery-images_card'>
            <img src="images/image2.jpg" alt="" />
          </div>
          <div className='app__gallery-images_card'>
            <img src="images/image3.jpg" alt="" />
          </div>
          <div className='app__gallery-images_card'>
            <img src="images/image4.jpg" alt="" />
          </div>
          <div className='app__gallery-images_card'>
            <img src="images/image5.jpg" alt="" />
          </div>
          <div className='app__gallery-images_card'>
            <img src="images/image6.jpg" alt="" />
          </div>
          <div className='app__gallery-images_card'>
            <img src="images/image7.jpg" alt="" />
          </div>
          <div className='app__gallery-images_card'>
            <img src="images/image8.jpg" alt="" />
          </div>
          <div className='app__gallery-images_card'>
            <img src="images/image9.jpg" alt="" />
          </div>


        </div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort className='icon' color='#ffffff' onClick={()=> scroll('left')}></BsArrowLeftShort>
          <BsArrowRightShort className='icon' color='#ffffff' onClick={()=> scroll('right')}></BsArrowRightShort>
        </div>
      </div>
    </div>
  )
}

export default Gallery
