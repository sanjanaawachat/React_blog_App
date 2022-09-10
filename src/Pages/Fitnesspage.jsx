import React from 'react'
import Fitness from '../Fitness page/Fitness'
import Top from '../Toppostcommon/Top'
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

