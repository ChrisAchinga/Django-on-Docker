import { Container, Navbar, Nav } from 'react-bootstrap'

const Menu = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>Community Space</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='mr-sm-2' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>FAQ</Nav.Link>
            <Nav.Link href='#link'>COVID-19 Protocols</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
