import React from 'react'
import { tech_data } from '../Data/Technologydata'
import Card from '../Components/Card'



const Technology = () => {
  return (
    <div className="container">
      <div className="left-container">
      <h2 style={{fontSize:'35px',letterSpacing:'5px',color:'white'}}>Technology</h2><hr style={{color:'white'}}/>
      <hr style={{width:'200px',marginTop:'8px',height:'2px',color:'darkblue'}}/><br/>
      {
        tech_data.map((val,i)=>{
          return(
              <Card img={val.img} title={val.title} date={val.date}
              content={val.content} CategoryName={val.CategoryName} key={i}/>
          )
        })
      }
      </div>
      
   </div>
   )
}

export default Technology