import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, NavLink } from 'react-router-dom';
import GoogleLogin from './GoogleLogin';
import { auth, login, app } from "../firebaseConfig.js"

function Topbar() {

  console.log(app);
  const [userName, setuserName] = useState(null)
  const [isLoggedin, setisLoggedin] = useState(false)
  
  useEffect(() => {
    if(auth&&auth.currentUser){
      console.log("hello")
      setisLoggedin(true)
      console.log(auth.currentUser.displayName)
      setuserName(auth.currentUser.displayName)
    }

  }, [])
  
  
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to='/home'>Expert Kheti</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/home'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/dashboard'>Dashboard</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
            <Nav.Link as={NavLink} to='/contactus'>Contact us</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {isLoggedin ? <Navbar.Text>
              Signed in as: <Link to="profile">{userName}</Link>
            </Navbar.Text> :
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