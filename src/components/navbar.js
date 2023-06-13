// styling
import "../assets/css/navbar.css";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarMP = () => {

    return (
        <Navbar bg="" sticky='top' expand="lg" className='navDiv shadow-lg'>
            <Navbar.Brand href="/" className="navBrand px-4">Madelyn Perez</Navbar.Brand>
            <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="">
                <Nav className="me-auto">
                    <Nav.Link href="#profile" className='mx-4 navLink'>About Me</Nav.Link>
                    <Nav.Link href="#skills" className='mx-4 navLink'>My Skills</Nav.Link>
                    <Nav.Link href="#workExp" className='mx-4 navLink'>Work Experience</Nav.Link>
                    <Nav.Link href="#projects" className='mx-4 navLink'>Projects</Nav.Link>
                    <Nav.Link href="#contacts" className='mx-4 navLink'>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavbarMP