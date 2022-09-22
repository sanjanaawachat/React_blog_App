import React from 'react'
import Home from '../Home page/Home'
import '../style.css'
import Articles from '../Commonpages/Articles'
import Latestfeatures from '../Home page/Latestfeatures'
import Adver1 from '../Home page/Adver1'
export default function Homepage() {
  return (
    <div className='Home'>
      <h1 className='heading'></h1>
      <Home />
       <Latestfeatures /> 
      <Articles />
      <Adver1/>
      </div>
  )
}
