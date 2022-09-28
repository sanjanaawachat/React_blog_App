import React from 'react'
import Card from 'react-bootstrap/Card';

import {useParams,Link} from 'react-router-dom'
import { bolly_data } from '../Data/Bollywooddata'
import { holly_data } from '../Data/Hollywooddata'
import { food_data } from '../Data/Fooddata'
import {fitness_data} from '../Data/Fitnessdata'
import { tech_data } from '../Data/Technologydata'

const ContentPage = () => {
  const { articleTitle, articleCategory } = useParams();
  return (
    <div>
      {
        bolly_data.map(
          (article,i)=>
          article.title===articleTitle && (
            <div className='tech-container'>
      <h2 className='tech-h2'>{article.title}</h2><br/>
      <div className='tech-title'>
        <div className='tech-title-left'>
        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=5e9582fc-efba-45da-9853-682fd88122a9&api_key=CometServer1&access_token=1662046775_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_9c676991bf8aa3aca1b8ffed190c35062bedb0e3" alt="" />
          <div className="tech-title-user">
            <p> {article.date}</p>
          </div>
        </div>
      </div><br/><br/>
        <hr style={{marginBottom:'5px'}}/>
        <img src={article.img} alt="bollywood" height="400px" width="600px" className='tech-image'/>
      <p className='text'>{article.content}</p>
      <br/><br/>
      <br/>

    <br/>
      <Card className='tech-footer'>
      <Card.Body>
        <Card.Title style={{color:'white'}}>Title</Card.Title>
        <Card.Text style={{color:'white'}}>
        {article.date}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          )
        )
      }
       {
        holly_data.map(
          (article,i)=>
          article.title===articleTitle && (
            <div className='tech-container'>
      <h2 className='tech-h2'>{article.title}</h2><br/>
      <div className='tech-title'>
        <div className='tech-title-left'>
        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=5e9582fc-efba-45da-9853-682fd88122a9&api_key=CometServer1&access_token=1662046775_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_9c676991bf8aa3aca1b8ffed190c35062bedb0e3" alt="" />
          <div className="tech-title-user">
            <p> {article.date}</p>
          </div>
        </div>
      </div><br/><br/>
        <hr style={{marginBottom:'5px'}}/>
        <img src={article.img} alt="hollywood" height="400px" width="600px"/>
      <p className='text'>{article.content}</p>
      <br/><br/>
     
      <br/>

    <br/>
      <Card className='tech-footer'>
     
      <Card.Body>
        <Card.Title style={{color:'white'}}>Title</Card.Title>
        <Card.Text style={{color:'white'}}>
        {article.date}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          )
        )
      }
       {
        tech_data.map(
          (article,i)=>
          article.title===articleTitle && (
            <div className='tech-container'>
      <h2 className='tech-h2'>{article.title}</h2><br/>
      <div className='tech-title'>
        <div className='tech-title-left'>
        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=5e9582fc-efba-45da-9853-682fd88122a9&api_key=CometServer1&access_token=1662046775_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_9c676991bf8aa3aca1b8ffed190c35062bedb0e3" alt="" />
          <div className="tech-title-user">
            <p> {article.date}</p>
          </div>
        </div>
      </div><br/><br/>
        <hr style={{marginBottom:'5px'}}/>
        <img src={article.img} alt="technology" height="400px" width="600px"/>
      <p className='text'>{article.content}</p>
      <br/><br/>
    
      <br/>

    <br/>
      <Card className='tech-footer'>
      <Card.Body>
        <Card.Text style={{color:'white'}}>
        {article.date}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          )
        )
      }
       {
        fitness_data.map(
          (article,i)=>
          article.title===articleTitle && (
            <div className='tech-container'>
      <h2 className='tech-h2'>{article.title}</h2><br/>
      <div className='tech-title'>
        <div className='tech-title-left'>
        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=5e9582fc-efba-45da-9853-682fd88122a9&api_key=CometServer1&access_token=1662046775_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_9c676991bf8aa3aca1b8ffed190c35062bedb0e3" alt="" />
          <div className="tech-title-user">
            <p>{article.date}</p>
          </div>
        </div>
      </div><br/><br/>
        <hr style={{marginBottom:'5px'}}/>
        <img src={article.img} alt="fitness" height="400px" width="600px"/>
      <p className='text'>{article.content}</p>
      <br/><br/>
      
      <br/>

    <br/>
      <Card className='tech-footer'>
      
      <Card.Body>
        <Card.Title style={{color:'white'}}>Title</Card.Title>
        <Card.Text style={{color:'white'}}>
        {article.date}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          )
        )
      }
       {
        food_data.map(
          (article,i)=>
          article.title===articleTitle && (
            <div className='tech-container'>
      <h2 className='tech-h2'>{article.title}</h2><br/>
      <div className='tech-title'>
        <div className='tech-title-left'>
        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=5e9582fc-efba-45da-9853-682fd88122a9&api_key=CometServer1&access_token=1662046775_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_9c676991bf8aa3aca1b8ffed190c35062bedb0e3" alt="" />
          <div className="tech-title-user">
            <p>{article.date}</p>
          </div>
        </div>
      </div><br/><br/>
        <hr style={{marginBottom:'5px'}}/>
        <img src={article.img} alt="food" height="400px" width="600px"/>
      <p className='text'>{article.content}</p>
      <br/><br/>
      
      <br/>

    <br/>
      <Card className='tech-footer'>
      <Card.Header style={{color:'white'}}>WRITTEN BY</Card.Header>
      <Card.Body>
        <Card.Title style={{color:'white'}}><b>Title</b></Card.Title>
        <Card.Text style={{color:'white'}}>
         {article.date}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
          )
        )
      }
         <div className="container">
            <h2 style={{color:'white'}}>More information about From The Siren</h2>
            <hr/><br/>
            <div className="more-data">
              {
               
                bolly_data.map((article,i)=>{
                  if( article.CategoryName === articleCategory &&
                    i>=bolly_data.length-5 &&
                    article.title!== articleTitle)
                    {
                  return(
                        <div className="data" key={i}>
                        <img src={article.img} alt="food" height="300px" width="400px" style={{borderRadius:'25px'}}></img>
                        <h3 style={{color:'white'}}><Link to={`/article/${article.title}/${article.CategoryName}`}>{article.title}</Link></h3>
                        <div className="tech-title-user">
                          <h3 style={{width:'200px'}}>Title</h3><br/>
                           <p>{article.date}</p>
                        </div>
                      </div>
                  
                    )
                  }
                })
                    }
                 {
                // eslint-disable-next-line
                holly_data.map((article,i)=>{
                  if( article.CategoryName === articleCategory &&
                    i>=holly_data.length-5 &&
                    article.title!== articleTitle)
                    {
                  return(
                        <div className="data" key={i}>
                        <img src={article.img} alt="food" height="300px" width="400px" style={{borderRadius:'25px'}}></img>
                        <h3><Link to={`/article/${article.title}/${article.CategoryName}`}>{article.title}</Link></h3>
                        <div className="tech-title-user">
                          <h3 style={{width:'200px'}}></h3><br/>
                           <p>{article.date}</p>
                        </div>
                      </div>
                  
                    )
                  }
                })
                    }
                 {
                // eslint-disable-next-line
                tech_data.map((article,i)=>{
                  if( article.CategoryName === articleCategory &&
                    i>=tech_data.length-5 &&
                    article.title!== articleTitle)
                    {
                  return(
                        <div className="data" key={i}>
                        <img src={article.img} alt="food" height="300px" width="400px" style={{borderRadius:'25px'}}></img>
                        <h3><Link to={`/article/${article.title}/${article.CategoryName}`}>{article.title}</Link></h3>
                        <div className="tech-title-user">
                          <h3 style={{width:'200px'}}></h3><br/>
                           <p>{article.date}</p>
                        </div>
                      </div>
                  
                    )
                  }
                })
                    }
                 {
                // eslint-disable-next-line
                fitness_data.map((article,i)=>{
                  if( article.CategoryName === articleCategory &&
                    i>=fitness_data.length-5 &&
                    article.title!== articleTitle)
                    {
                  return(
                        <div className="data" key={i}>
                        <img src={article.img} alt="food" height="300px" width="400px" style={{borderRadius:'25px'}}></img>
                        <h3><Link to={`/article/${article.title}/${article.CategoryName}`}>{article.title}</Link></h3>
                        <div className="tech-title-user">
                          <h3 style={{width:'200px'}}></h3><br/>
                           <p>{article.date}</p>
                        </div>
                      </div>
                  
                    )
                  }
                })
                    }
                      {
                // eslint-disable-next-line
                food_data.map((article,i)=>{
                  if( article.CategoryName === articleCategory &&
                    i>=food_data.length-5 &&
                    article.title!== articleTitle)
                    {
                  return(
                        <div className="data" key={i}>
                        <img src={article.img} alt="food" height="300px" width="400px" style={{borderRadius:'25px'}}></img>
                        <h3 style={{color:'white'}}><Link to={`/article/${article.title}/${article.CategoryName}`}>{article.title}</Link></h3>
                        <div className="tech-title-user">
                          <h3 style={{width:'200px'}}></h3><br/>
                           <p style={{color:'white'}}>{article.date}</p>
                        </div>
                      </div>
                  
                    )
                  }
                })
                    }
            </div>
        </div> 
    </div>
  )
}

export default ContentPage