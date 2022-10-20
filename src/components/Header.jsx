import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <Navbar>
      <Container>
        <Link to='/'>
          <Navbar.Brand className={location.pathname === '/' ? 'btn btn-success' : 'btn btn-danger'}>Home</Navbar.Brand>
        </Link>
        <Link to='/add'>
          <Navbar.Brand className={location.pathname === '/add' ? 'btn btn-success' : 'btn btn-danger'}>Add</Navbar.Brand>
        </Link>
        <Link to='/contacts'>
          <Navbar.Brand className={location.pathname === '/contacts' ? 'btn btn-success' : 'btn btn-danger'}>Contacts</Navbar.Brand>
        </Link>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Login as user: Super@Tom
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header