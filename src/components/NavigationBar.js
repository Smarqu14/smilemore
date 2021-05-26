import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavigationBar() {
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>Smile More</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/contact'>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to='/services'>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to='/team'>
              Team
            </Nav.Link>
            <Nav.Link as={Link} to='/about'>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
