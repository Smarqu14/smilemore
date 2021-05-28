import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import Logo from '../../images/smile.png';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <>
      <Navbar expand='lg'>
        <Navbar.Brand as={Link} to='/'>
          <img src={Logo} className='logo' alt='Dental office logo' />
        </Navbar.Brand>
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
    </>
  );
}

export default NavigationBar;
