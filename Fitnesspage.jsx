import React from 'react'
import Fitness from '../Commonpages/Fitness'
import Top from '../Commonpages/Top'
import Advertisepost from '../Components/Advertisepost'
import Toppost from '../Home page/Toppost'

export default function Fitnesspage() {
  return (
    <div className='Fitness'>

      <Fitness/>
      <Top/>
      <Advertisepost/>
      <Toppost/>
    </div>
  )
}

