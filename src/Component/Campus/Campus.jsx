import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/gallery1.png'
import gallery2 from '../../assets/gallery2.png'
import gallery3 from '../../assets/gallery3.png'
import gallery4 from '../../assets/gallery4.png'
import white from '../../assets/white.png'

const Campus = () => {
  return (
    <div className="campus">
        <div className="gallery">
            <img src={gallery1 } alt="" />
            <img src={gallery2 } alt="" />
            <img src={gallery3 } alt="" />
            <img src={gallery4 } alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={white} alt="" /></button>
    </div>
  )
}

export default Campus