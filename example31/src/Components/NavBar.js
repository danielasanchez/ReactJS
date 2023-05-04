import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'


const NavBar = () => {
  return (

    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/informacion">Informacion</Nav.Link>
          <Nav.Link href="/contacto">contacto</Nav.Link>
        </Nav>
      </Container>
    </Navbar>



  );
}

export default NavBar;