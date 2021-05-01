import Image from 'next/image'
import { NavDropdown, Navbar, Nav, Container } from 'react-bootstrap'

const Navmenu = () => {
  return (
    <Navbar fixed='top' expand='lg' bg='light' variant='light'>
      <Container>
        <Navbar.Brand href='/'>
          <Image
            src='/logo.png'
            width={100}
            height='30'
            className='d-inline-block align-top'
            alt='SwahiliPotHub logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <NavDropdown
              title='Dropdown'
              className='justify-content-end'
              id='basic-nav-dropdown'
            >
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navmenu
