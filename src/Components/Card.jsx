import React from 'react'
import {Link} from 'react-router-dom'

const Card = (props) => {
  return (
    <div className="element-section">
    <hr style={{width:'870px'}}/><br/>
    <div className='element'>
      <img src={props.img} alt="" height="35%" width="35%" style={{borderRadius:'25px'}} className='element-image'/>
      <div className="bolly-content">
        <h3 style={{color:'white'}}><Link to={`/article/${props.title}/${props.CategoryName}`}>{props.title}</Link></h3><br/>
        <p>{props.content}</p><br/>
        <h5 style={{color:"white"}}>{props.date}</h5><br/>
      </div>
    </div>
  </div>
  )
}

export default Card