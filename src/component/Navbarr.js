import React from 'react'
import {Navbar,Nav,FormControl,Button,Form} from 'react-bootstrap'


function Navbarr() {
    return (
        <div>
          <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Login</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Shop Collection</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
      <Nav.Link href="#pricing">Panier</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-warning">Search</Button>
    </Form>
  </Navbar>
        </div>
    )
}

export default Navbarr
