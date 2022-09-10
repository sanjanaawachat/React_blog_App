import React from 'react'
import Hollywood from '../Hollywoodpage/Hollywood'
import Advertisepost from '../Components/Advertisepost'

import Top from '../Toppostcommon/Top'
import Toppost from '../Home page/Toppost'
export default function Hollywoodpage() {
  return (
    <div className='Hollywood'>
        <Hollywood/>
        <Top/>
        <Advertisepost/>
        <Toppost/>
    </div>
  )
}
