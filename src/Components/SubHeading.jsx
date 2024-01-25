import React from 'react'
import { GiKnifeFork } from 'react-icons/gi'

const SubHeading = ({title}) => {
  return (
    <div style={{marginBottom:"1rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <p className='opensan'>{title}</p>
        <GiKnifeFork color='#ffff' style={{margin:"-10px"}}></GiKnifeFork>
        {/* <img src="images/logo.png" width={50} height={50} alt="spoon" /> */}
    </div>
  )
}

export default SubHeading