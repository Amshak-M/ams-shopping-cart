import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
          <Navbar bg="primary" varient="dark" color="white" expand="md"  collapseOnSelect>
            <Container> 
              <LinkContainer to='/'>                  
              <Navbar.Brand  >Ams-Cart</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <LinkContainer to='/cart'> 
                    <Nav.Link>Cart</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/login'> 
                    <Nav.Link>Sign in</Nav.Link>     
                  </LinkContainer>
                    </Nav>   
                    </Navbar.Collapse>                    
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
