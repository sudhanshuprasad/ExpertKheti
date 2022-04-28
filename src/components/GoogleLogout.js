import React from 'react'
import {GooglesignOut} from '../firebaseConfig.js'



function GoogleLogout() {

  return (
    <div className='mx-3' onClick={GooglesignOut}>Logout</div>
  )
}

export default GoogleLogout