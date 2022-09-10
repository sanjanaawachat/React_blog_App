import React from 'react'
import Advertisepost from '../Components/Advertisepost'
import Toppost from '../Home page/Toppost'
import Technology from '../Technology page/Technology'
import Top from '../Toppostcommon/Top'
export default function Technologypage() {
  return (
    <div className='Technology'>
        <Technology/>
       <Top/>
        <Advertisepost/>
        <Toppost/>
    </div>
  )
}
