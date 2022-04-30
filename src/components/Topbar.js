import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, NavLink } from 'react-router-dom';
import GoogleLogin from './GoogleLogin';
import { auth, login, app } from "../firebaseConfig.js"
import {useAuthState} from "react-firebase-hooks/auth"
import GoogleLogout from './GoogleLogout';

function Topbar() {
  
  const [userName, setuserName] = useState(null)
  const [user,loading,error] = useAuthState(auth)
  const [isLoggedin,setLoggedin] = useState(false)

  useEffect(() => {
    // console.log(user)
    if (user == null){
      setLoggedin(false)
    }
    else{
      setLoggedin(true);
      setuserName(user.displayName);
    }
  },[user]) 

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to='/'>Expert Kheti</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/home'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/dashboard'>Dashboard</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
            <Nav.Link as={NavLink} to='/contactus'>Contact us</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {isLoggedin ? <><Navbar.Text>
              Signed in as: <Link to="profile">{userName}</Link>
            </Navbar.Text>
            <Navbar.Text>
            <GoogleLogout/>
          </Navbar.Text></> :
              <Navbar.Text>
                <GoogleLogin />
              </Navbar.Text>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Topbar