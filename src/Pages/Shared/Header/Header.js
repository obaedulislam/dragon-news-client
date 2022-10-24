import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
        .then( () => {})
        .catch(error => console.error(error))
    }

    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand ><Link to='/' className='fw-bold text-decoration-none'>Dragon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#all-news">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link >
                            {
                                user?.uid ? 
                                <>
                                    <span>{user?.displayName}</span>
                                    <Button onClick={handleLogout} className='btn-primary mx-2 py-0'size="sm" >Log Out</Button>
                                </>
                                :
                                <>
                                    <Link className='text-decoration-none fw-semibold me-3' to='/login'>Login</Link>
                                    <Link className='text-decoration-none fw-semibold' to='/register'>Register</Link>
                                </>
                            }
                        </Nav.Link>
                        <Link to='/profile' className='mt-2'>
                            {
                                user?.photoURL ? 
                                <Image
                                 style={{height: '33px',width:'33px'}} roundedCircle 
                                 src={user.photoURL}></Image>
                                 : <FaUser></FaUser>
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;