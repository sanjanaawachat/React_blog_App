import React from 'react'
import Advertisepost from '../Components/Advertisepost'
import Food from '../Food page/Food'
import Toppost from '../Home page/Toppost'
import Top from '../Toppostcommon/Top'


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
