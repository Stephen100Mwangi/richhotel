import React, { useState } from 'react'
import './Intro.css'
import { GiPauseButton,GiPlayButton } from 'react-icons/gi'

const Intro = () => {
  // UseRef Usestate
  const vidRef = React.useRef();
  const [playVideo,setPlay] = useState(false);
  const handleVideo = ()=>{
    // Pass callback function to get initial state
    setPlay((prevPlayVideo)=> !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
    
  }

  return (
    <div className='app__video'>
      <video 
          src="images/chicken.mp4"
          controls={false}
          loop
          muted
          ref={vidRef}
          type="video/mp4"
          width="100%"
          />

      <div className="app__overlay-video">
        <div className="app__video__circle" onClick={handleVideo}>
        {playVideo ? (<GiPauseButton color='#ffffff'></GiPauseButton>) : <GiPlayButton color='#ffffff'></GiPlayButton>}
        </div>
      </div>

    </div>
  )
}

export default Intro
