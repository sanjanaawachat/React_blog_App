import React from 'react'
import Advertisepost from '../Components/Advertisepost'
import Food from '../Commonpages/Food'
import Toppost from '../Home page/Toppost'
import Top from '../Commonpages/Top'


export default function Foodpage() {
  return (
    <div className='Food'>
        <Food/>
         <Top/>
         <Advertisepost/>
        <Toppost/>  
        
        
    </div>
  )
}
