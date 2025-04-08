import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from "react-router-dom";
import loginImage from './phone.png';
import Managejs from "./Managejs";

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/Managejs");
    };
     

    return (
        <Container fluid className="d-flex justify-content-center align-items-center vh-100"
            style={{
                backgroundImage: "url('login.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative"
            }}>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.3)",
                }}
            ></div>
            <Row className="shadow-lg rounded bg-white overflow-hidden" style={{ maxWidth: "900px", width: "100%", position: "relative", zIndex: 1 }}>
                <Col md={6} className="d-none d-md-block p-0">
                    <img
                        src={loginImage} 
                        alt="Login Illustration"
                        className="img-fluid h-100"
                        style={{ objectFit: "cover" }}
                    />
                </Col>
                <Col md={6} className="p-4">
                    <h2 className="text-center mb-3">Cashify</h2>
                    <h4 className="text-center mb-3">Log in</h4>
                    <Form>
                        <Form.Group className="mb-3">
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                <Form.Control type="email" placeholder="Email address" required />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1">*</InputGroup.Text>
                                <Form.Control type="password" placeholder="Password" required />
                            </InputGroup>
                        </Form.Group>
                        <div className="text-end mb-3">
                            <Link to="/forget">Forgot password?</Link>
                        </div>
                        <Button variant="primary" className="w-100" onClick={handleLogin}>Login</Button>
                    </Form>
                    <div className="text-center mt-3">
                        Don't have an account? <Link to="/Signup">Sign Up</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
