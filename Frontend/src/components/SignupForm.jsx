import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    customer_name: '',
    email: '',
    phone: '',
    password: '',
  };

  const validationSchema = Yup.object({
    customer_name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.string().required('Required'),
    password: Yup.string()
      .required('Required')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
        'Password must be 8-10 characters long and contain at least one letter, one number, and one special character.'
      ),
  });

  const onSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
    try {
      const response = await axios.post('http://127.0.0.1:5690/customers', values);
      console.log('Sign-up successful', response.data);
      // Handle successful sign-up, e.g., redirect to login page

      // Reset the form after successful submission
      resetForm();
      navigate("/Login");
    } catch (error) {
      console.error('Error signing up:', error.response.data.error);
      setErrors({ api: error.response.data.error });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
              <div className="mb-3">
                <label htmlFor="customer_name" className="form-label">Name</label>
                <Field type="text" id="customer_name" name="customer_name" className="form-control" />
                <ErrorMessage name="customer_name" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <Field type="text" id="email" name="email" className="form-control" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <Field type="text" id="phone" name="phone" className="form-control" />
                <ErrorMessage name="phone" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <Field type="password" id="password" name="password" className="form-control" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <Button variant="primary" type="submit">Sign Up</Button>
              </div>

              <ErrorMessage name="api" component={Alert} variant="danger" />
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;

