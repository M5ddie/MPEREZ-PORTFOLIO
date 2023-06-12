// styling
import "../assets/css/navbar.css";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarMP = () => {

    // const handleClickNav = () => {
    //     const linkAbout = document.getElementById('profile');
    //     if (linkAbout) {
    //         linkAbout.scrollIntoView({behavior: 'smooth'});
    //     }
    // };

    return (
        <Navbar bg="" sticky='top' expand="lg" className='navDiv shadow-lg'>
            <Navbar.Brand href="/">Maddie</Navbar.Brand>
            <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#profile" className='mx-4'>About Me</Nav.Link>
                    <Nav.Link href="#skills" className='mx-4'>My Skills</Nav.Link>
                    <Nav.Link href="#workExp" className='mx-4'>Work Experience</Nav.Link>
                    <Nav.Link href="#projects" className='mx-4'>PortFolio</Nav.Link>
                    <Nav.Link href="#contacts" className='mx-4'>Contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavbarMP