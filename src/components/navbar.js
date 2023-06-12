import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import '../assets/css/navbar.css';

const NavbarMP = () => {
    return (
        <Navbar bg="light" expand="lg" className='navDiv shadow-lg'>
            <Navbar.Brand href="#home">Maddie</Navbar.Brand>
            <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className='mx-4 fs-4'>Profile</Nav.Link>
                    <Nav.Link href="#link" className='mx-4'>Experiences</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavbarMP