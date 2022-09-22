import React from 'react'
import Card from '../Components/Card'
import { bolly_data } from '../Data/Bollywooddata'


const Bollywood = () => {
  return (
    <div className="container">
      <div className="left-container">
      <h2 style={{fontSize:'35px',letterSpacing:'5px',color:'white'}}>Bollywood</h2>
      <hr style={{width:'200px',marginTop:'8px',height:'2px',color:'darkblue',color:'white'}}/><br/>
      {
        bolly_data.map((val,i)=>{
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

export default Bollywood