import React from 'react'
import Card from '../Components/Card'
import { food_data } from '../Data/Fooddata'
// import Right from './Right'

const Food = () => {
  return (
    <div className="container">
    <div className="left-container">
    <h2 style={{fontSize:'35px',letterSpacing:'5px',color:'white'}}>Food</h2><hr style={{color:'white'}}/>
    <hr style={{width:'200px',marginTop:'8px',height:'2px',color:'darkblue'}}/><br/>
    {
      food_data.map((val,i)=>{
        return(
            <Card img={val.img} title={val.title} date={val.date}
            content={val.content} CategoryName={val.CategoryName} key={i}/>
        )
      })
    }
    </div>
    <div className="right-container">
      {/* <Right/> */}
      </div>
  </div>
  )
}

export default Food