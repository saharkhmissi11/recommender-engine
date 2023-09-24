import {React,useState} from 'react';
import { Container, Navbar, Nav, Button, Modal } from 'react-bootstrap';
import Login from '../Login/Login';
import Register from '../Register/Register';
import "./Home.css"
const Home = () => {
    const [show, setShow] = useState(false);
    const [showlogin, setShowlogin] = useState(false);
    const handleClose = () => setShow(false);
    const handleCloselogin = () => setShowlogin(false);
    const handleShow = () => setShow(true);
    const handleShowlogin = () => setShowlogin(true);
    
    return (
        <>
            <div>
                {/* Navigation Bar */}
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Your Brand</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/home" >Home</Nav.Link>
                                <Nav.Link onClick={handleShowlogin}>Login</Nav.Link>
                                <Nav.Link  onClick={handleShow}>Subscribe</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* Hero Section */}
                <div className="jumbotron text-center">
                    <h1>Welcome to Your Website</h1>
                    <p>Your Catchy Slogan Goes Here</p>
                    <Button variant="primary">Learn More</Button>
                </div>

            </div>
           

      <Modal show={show} onHide={handleClose}  size="lg" centered >
        <Modal.Header closeButton >
         
        </Modal.Header>
        <Modal.Body  className="custom">
            <Register></Register>
        </Modal.Body>
       
      </Modal>
      <Modal show={showlogin} onHide={handleCloselogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Login></Login>
        </Modal.Body>
       
      </Modal>
        </>
    );
};

export default Home;