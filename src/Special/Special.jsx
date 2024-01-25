import React from 'react'

import SubHeading from '../Components/SubHeading'
import './Special.css'

const Special = () => {
  
  const wines = [
    {
      name:"Chapel Hill",
      price:"$65"
    },
    {
      name:"Shiras",
      price:"$45"
    },
    {
      name:"Kimo Pale Ale",
      price:"$35"
    },
    {
      name:"Calrena Malbee",
      price:"$40"
    },
    {
      name:"Irish Guienessa",
      price:"$65"
    }

  ]
  
  const cocktails = [
    {
      name:"Aperal Spirits",
      price:"$65"
    },
    {
      name:"Dark N Stormy",
      price:"$95"
    },
    {
      name:"Old Fashioned",
      price:"$105"
    },
    {
      name:"Dalguirl",
      price:"$140"
    }
   
    ]
  return (
    <div className='app__specialMenu' id='menu'>
      <div className="app_specialMenu-title">
        <SubHeading title="Menu That Fits Your Pallete"></SubHeading>
        <h1>Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMemnu-menu__wine">
          <h1 className=''>Wine & Beer</h1>
          {wines.map((wine) => <li className='specialMenu__beer-list' style={{color:"#ffffff"}} key={wine.name}>{wine.name}<span>______</span>{wine.price}</li>)}
        </div>
        <div className="app__specialMemnu-menu__wine">
          <img src="images/food1.jpg" alt="" width={200} />
        </div>
        <div className="app__specialMemnu-menu__wine">
          <h1>CockTails</h1>
          {cocktails.map((item) => <li className='specialMenu__beer-list' style={{color:"#ffffff"}} key={item.name}>{item.name}<span>_______</span>{item.price}</li>)}
        </div>
      </div>

      <button className='simpleButton'>View More</button>
      
    </div>
  )
}

export default Special
