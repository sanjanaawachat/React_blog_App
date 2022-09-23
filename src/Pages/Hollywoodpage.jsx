import React from 'react'
import Hollywood from '../Commonpages/Hollywood'
import Advertisepost from '../Components/Advertisepost'
import Top from '../Commonpages/Top'
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
