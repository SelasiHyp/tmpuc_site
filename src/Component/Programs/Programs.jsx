import React from 'react'
import './Programs.css'
import grad from '../../assets/grad.jpg'
import grad3 from '../../assets/grad3.jpg'
import grad2 from '../../assets/grad2.jpg'
import program15 from '../../assets/program15.png'
import program25 from '../../assets/program25.png'
import program35 from '../../assets/program35.png'

const Programs = () => {
  return (
    <div className='programs'  >
        <div className="program">
            <img src={grad} alt="" />
            <div className="caption">
                <img src={program15} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={grad3} alt="" />
            <div className="caption">
                <img src={program25} alt="" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={grad2} alt="" />
            <div className="caption">
                <img src={program35} alt="" />
                <p>Post Graduation</p>
            </div>
        </div>
        
    </div>
  )
}

export default Programs