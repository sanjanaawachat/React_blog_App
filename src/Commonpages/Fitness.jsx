import React from 'react'
import {fitness_data} from '../Data/Fitnessdata'
import Card from '../Components/Card'

const Fitness = () => {
  return (
    <div className="container">
    <div className="left-container">
    <h2 style={{fontSize:'35px',letterSpacing:'5px',color:'white'}}>Fitness</h2><hr style={{color:'white'}}/>
    <hr style={{width:'200px',marginTop:'8px',height:'2px',color:'darkblue'}}/><br/>
    {
      fitness_data.map((val,i)=>{
        return(
            <Card img={val.img} title={val.title} date={val.date}
            content={val.content} CategoryName={val.CategoryName} key={i}/>
        )
      })
    }
    </div>
    <div className="right-container">
    
      </div>
  </div>
  )
}

export default Fitness