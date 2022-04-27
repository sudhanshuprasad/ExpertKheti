import React from 'react'
import {auth, login } from "../firebaseConfig.js"

function GoogleLogin() {

    function handleLogin(){
        login();
    }

  return (
    <button onClick={handleLogin}>GoogleLogin</button>
  )
}

export default GoogleLogin