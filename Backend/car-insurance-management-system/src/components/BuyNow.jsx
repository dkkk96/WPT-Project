import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BuyNow = () => {
    const navigate = useNavigate();

  const initialValues = {
    // Personal Details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

    // Car Details
    model: '',
    year: '',
    color: '',
    registrationNumber: '',

    // Payment Details
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  };

  const validationSchema = Yup.object({
    // Personal Details
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.string().required('Required'),

    // Car Details
    model: Yup.string().required('Required'),
    year: Yup.number().required('Required'),
    color: Yup.string().required('Required'),
    registrationNumber: Yup.string().required('Required'),

    // Payment Details
    cardNumber: Yup.string().required('Required'),
    expirationDate: Yup.string().required('Required'),
    cvv: Yup.string().required('Required'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    
    try {
      // Step 1: Add customer details to the 'customers' table
      const customerResponse = await axios.post('http://127.0.0.1:5690/customers', {
        customer_name: `${values.firstName} ${values.lastName}`,
        email: values.email,
        phone: values.phone,
        password: 'randompassword', // You should hash the password on the server side
      });

      const customerId = customerResponse.data.customer_id;

      // Step 2: Add policy details to the 'policies' table
      const policyResponse = await axios.post('http://127.0.0.1:5690/policies', {
        customer_id: customerId,
        policy_type: 'Comprehensive', // Replace with the actual policy type
        coverage_amount: 10000, // Replace with the actual coverage amount
        start_date: new Date().toISOString().split('T')[0],
        end_date: '2024-11-12', // Replace with the actual end date
      });

      const policyId = policyResponse.data.policy_id;

      // Step 3: Add vehicle details to the 'vehicles' table
      await axios.post('http://127.0.0.1:5690/vehicles', {
        customer_id: customerId,
        policy_id: policyId,
        model: values.model,
        year: values.year,
        color: values.color,
        registration_number: values.registrationNumber,
      });

      // Step 4: Add payment details to the 'payments' table
      await axios.post('http://127.0.0.1:5690/payments', {
        customer_id: customerId,
        policy_id: policyId,
        payment_date: new Date().toISOString().split('T')[0],
        amount: 10000, // Replace with the actual payment amount
        payment_method: 'online', // Replace with the actual payment method
      });

      console.log('Policy purchased successfully');

      // Redirect to the policy purchase page after successful form submission
      navigate('/policypurchase');
    } catch (error) {
      console.error('Error purchasing policy:', error.response?.data?.error || error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
         {/* Personal Details */}
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field type="text" id="firstName" name="firstName" />
        <ErrorMessage name="firstName" component="div" />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field type="text" id="lastName" name="lastName" />
        <ErrorMessage name="lastName" component="div" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <Field type="text" id="email" name="email" />
        <ErrorMessage name="email" component="div" />
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <Field type="text" id="phone" name="phone" />
        <ErrorMessage name="phone" component="div" />
      </div>

      {/* Car Details */}
      <div>
        <label htmlFor="model">Car Model</label>
        <Field type="text" id="model" name="model" />
        <ErrorMessage name="model" component="div" />
      </div>

      <div>
        <label htmlFor="year">Car Year</label>
        <Field type="number" id="year" name="year" />
        <ErrorMessage name="year" component="div" />
      </div>

      <div>
        <label htmlFor="color">Car Color</label>
        <Field type="text" id="color" name="color" />
        <ErrorMessage name="color" component="div" />
      </div>

      <div>
        <label htmlFor="registrationNumber">Registration Number</label>
        <Field type="text" id="registrationNumber" name="registrationNumber" />
        <ErrorMessage name="registrationNumber" component="div" />
      </div>

      {/* Payment Details */}
      <div>
        <label htmlFor="cardNumber">Card Number</label>
        <Field type="text" id="cardNumber" name="cardNumber" />
        <ErrorMessage name="cardNumber" component="div" />
      </div>

      <div>
        <label htmlFor="expirationDate">Expiration Date</label>
        <Field type="text" id="expirationDate" name="expirationDate" />
        <ErrorMessage name="expirationDate" component="div" />
      </div>

      <div>
        <label htmlFor="cvv">CVV</label>
        <Field type="text" id="cvv" name="cvv" />
        <ErrorMessage name="cvv" component="div" />
      </div>

        <div>
          <button type="submit">
            Submit
          </button>
        </div>
        <div>
        <button type="button" onClick={() => navigate('/')}>
            Back
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default BuyNow;
