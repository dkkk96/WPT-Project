import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = () => {
    console.log("data submitted");
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form className="p-4 shadow-lg bg-white rounded">
            <h1 className="mb-4 text-center">Login</h1>

            <Form.Group controlId="formUsername" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="rounded-start"
                />
                <InputGroup.Text className="rounded-end">
                  <i className="bi bi-person" />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="rounded-start"
                />
                <InputGroup.Text className="rounded-end">
                  <i className="bi bi-lock" />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Button variant="info" type="button" className="btn w-100" onClick={submitForm}>
              Login
            </Button>

            <Form.Text className="register-link mt-3 text-center">
              <p className="mb-0">
                Don't have an account?
                <Link to='/register'>Register</Link>
              </p>
            </Form.Text>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
