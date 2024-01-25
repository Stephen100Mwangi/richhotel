import React from 'react'
import './Laurels.css'
import SubHeading from '../Components/SubHeading'

const Laurels = () => {
  const awards = [
    {
    imgUrl:"",
    title:"Sarah John",
    subText:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      imgUrl:"",
      title:"Steve Mwangi",
      subText:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      imgUrl:"",
      title:"Gicheru Kahome",
      subText:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      imgUrl:"",
      title:"Joe Mwangi",
      subText:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ]
  return (
    <div className='app__laurens' id='awards'>
      <div className="app__wrapper-info">
        <SubHeading title="Awards & Recognition"></SubHeading>
        <h1 className='cormorant'>Our Laurels</h1>
        <div className='app__laurels-awards'>
          {awards.map((item)=><div className='app__larens-awrads__card'>
            <div>{<i class="fa-solid fa-award" style={{color:"#FFFFFF",fontSize:"2rem"}}></i>}</div>
            <div>
              <div className='cormorant'>{item.title}</div>
              <p className='opensans'>{item.subText}</p>
            </div>
            
          </div>)}
        </div>
        <div className="app__wrapper-img">
          <img src="images/food3.jpg" height={200} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Laurels
