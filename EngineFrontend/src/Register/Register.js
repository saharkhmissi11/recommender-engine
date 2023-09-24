import { React, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import UserService from '../Sevices/UserService';
import './Register.css'
import applogo from "../images/logo.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
function Register() {

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
      window.location.href = '/home'
    } catch (error) {
      console.error(error); // Handle registration errors
    }
  };



  return (
    <>

      <Container className="my-custom-container" >
        <Row className="justify-content-center">
          <Col xs={7}>
            <h3 style={{color: '#aa2de4'}}>Subscribe</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="firstname" >
                <Form.Control type="text" required placeholder="Firstname" name="firstname" value={user.firstname} onChange={handleInputChange} />
              </Form.Group>
              <br></br>
              <Form.Group controlId="lastname">
                <Form.Control type="text" required placeholder="Lastname" name="lastname" value={user.lastname} onChange={handleInputChange} />
              </Form.Group>
              <br></br>

              <Form.Group controlId="email">
                <Form.Control type="email" required placeholder="Email" name="email" value={user.email} onChange={handleInputChange} />
                <br></br>
                <Form.Group controlId="password">
                  <Form.Control type="password" required placeholder="Password" name="password" value={user.password} onChange={handleInputChange} />
                </Form.Group>
                <br></br>
                <Form.Group controlId="birthDate">
                  <Form.Control type="date" required placeholder="Birth Date" name="birthDate" value={user.birthDate} onChange={handleInputChange} />
                </Form.Group>
                <br></br>
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Control type="tel" required placeholder="Phone number" name="phone" value={user.phone} onChange={handleInputChange} />
              </Form.Group>
              <br></br>
              <div key={`inline-radio`} className="mb-3" >
                <Form.Check
                  inline
                  label="Male"
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={user.gender === 'Male'}
                  onChange={handleInputChange}
                />
                <Form.Check
                  inline
                  label="Female"
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={user.gender === 'Female'}
                  onChange={handleInputChange}
                />
              </div>
              <button className="signup-button"  type="submit" >
                Save Changes
              </button>
            </Form>
          </Col>
          <Col xs={5}>
            <div className="side">
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <h5>Connect with </h5>
             <img style={{width:'50px'}} alt="" src={facebook}></img>
             <img style={{width:'38px'}} alt="" src={instagram}></img>
             <img style={{width:'50px'}} alt="" src={facebook}></img>
            </div>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default Register;