import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, NavLink } from 'react-router-dom';

function Topbar() {

  const [login, setLogin] = useState(true);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to='/home' exact>Expert Kheti</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/home' exact>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/about' exact>About</Nav.Link>
            <Nav.Link as={NavLink} to='/contactus' exact>Contact us</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {login ? <Navbar.Text>
              Signed in as: <Link to="profile">Sudhanshu</Link>
            </Navbar.Text> :
              <Navbar.Text>
                <Link to="login">Login</Link>
              </Navbar.Text>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Topbar