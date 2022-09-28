import React from 'react'
import {NavLink} from 'react-router-dom'
const PageNotFound = () => {
  return (
    <div id="notfound">
      <div className='notfound'>
        <div className='notfound-404'>
          <h1>404</h1>
        </div>
        <h2>we are sorry,page not found!!!!</h2>
        <p className="mb-5">
          This page doesnt exist  !!!!!
        </p>
        <NavLink to="/">Back to home page</NavLink>
      </div>
     
  
    </div>
    
  )
}
export default PageNotFound