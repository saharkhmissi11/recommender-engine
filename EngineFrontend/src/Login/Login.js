import { React, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import UserService from '../Sevices/UserService';
function Login() {

    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        birthDate: '',
        phone: '',
        gender: '',
    });
    const [showalert, setShowalert] = useState()
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await UserService.addUser(user); // Use the UserService to register the user
            console.log(response); // Log the response (optional)
            setShowalert(true)
            // Handle successful registration or errors here
        } catch (error) {
            console.error(error); // Handle registration errors
        }
    };



    return (
        <>

            <Container >
                <Row className="justify-content-center">
                    <Col >
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="email">
                                <Form.Control type="email" placeholder="Email" name="email" value={user.email} onChange={handleInputChange} />
                            </Form.Group>
                            <br></br>
                            <Form.Group controlId="password">
                                <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleInputChange} />
                            </Form.Group>
                            <br></br>
                            <Form.Text> <a href="https://example.com" style={{ color: 'green', textDecoration: 'none' }}>Forgot Password ?</a></Form.Text>
                            <br></br>
                            <br></br>
                            <Button variant="primary" type="submit" href="/home">
                                log in
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;