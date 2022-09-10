import React from 'react'
import Home from '../Home page/Home'
import '../style.css'
import Articles from '../Latest Articles/Articles'
import Latestfeatures from '../Home page/Latestfeatures'
import Toppost from '../Home page/Toppost'
import Adver1 from '../Home page/Adver1'
export default function Homepage() {
  return (
    <div className='Home'>
      <h1 className='heading'></h1>
      <Home />
      <Latestfeatures />
      <Articles />
      <Toppost />
      <Adver1/>
      </div>
  )
}
