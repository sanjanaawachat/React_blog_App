import React from 'react'
import Bollywood from '../Bollywood page/Bollywood'
import Top from '../Toppostcommon/Top'
import Advertisepost from '../Components/Advertisepost'
import Toppost from '../Home page/Toppost'


export default function Bollywoodpage() {
  return (
    <div className='Bollywood'>
      <Bollywood/>
      <Top/> 
        <Advertisepost/>
     <Toppost/> 
      
    </div>
  )
  
}
