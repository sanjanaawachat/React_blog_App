import React from 'react'
import { food_data } from '../Data/Fooddata'
import Card from '../Components/Card'
import { bolly_data } from '../Data/Bollywooddata'


const Articles = () => {
  return (
    <div className="container">
        <h2 style={{color:'white',fontStyle:'italic'}}>Latest Articles</h2>
<hr style={{color:'white'}}/>
        <div className="latest_articles">
            <div className="latest_articles_left">
              
                <div className="left-container">
     
      <hr style={{width:'200px',marginTop:'8px',height:'2px',color:'darkred'}}/><br/>
      {
        bolly_data.map((val,i)=>{
          return(
              <Card img={val.img} title={val.title} date={val.date}
              content={val.content}  CategoryName={val.CategoryName} key={i}/>
          )
        })
      }
      </div>
                
            </div>

        </div>
    </div>
  )
}

export default Articles