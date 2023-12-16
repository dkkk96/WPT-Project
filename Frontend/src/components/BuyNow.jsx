import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PurchasePolicy.css';

const BuyNow = () => {
    const navigate=useNavigate();
  const [customerDetails, setCustomerDetails] = useState({
    customer_name: '',
    email: '',
    phone: '',
  });

  const [policyType, setPolicyType] = useState('');
  const [coverageAmount, setCoverageAmount] = useState(0);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5690/customers/');
        setCustomerDetails(response.data);
      } catch (error) {
        console.error('Error fetching customer details:', error.response?.data?.error || error.message);
      }
    };

    fetchCustomerDetails();
  }, []);

  const initialValues = {
    model: '',
    year: '',
    color: '',
    registrationNumber: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    Name: customerDetails.customer_name || '',
    phone: customerDetails.phone || '',
    email: customerDetails.email || '',
    policyType: '',
    coverageAmount: '',
  };

  const validationSchema = Yup.object({
    model: Yup.string().required('Required'),
    year: Yup.number().required('Required'),
    color: Yup.string().required('Required'),
    registrationNumber: Yup.string().required('Required'),
    cardNumber: Yup.string().required('Required'),
    expirationDate: Yup.string().required('Required'),
    cvv: Yup.string().required('Required'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const customerId = 1;

      const policyResponse = await axios.post('http://127.0.0.1:5690/policies', {
        customer_id: customerId,
        policy_type: values.policyType,
        coverage_amount: coverageAmount,
        start_date: new Date().toISOString().split('T')[0],
        end_date: '2024-10-12', // Replace with the actual end date
      });

      

      const policyId = policyResponse.data.policy_id;

      await axios.post('http://127.0.0.1:5690/vehicles', {
        customer_id: customerId,
        policy_id: policyId,
        model: values.model,
        year: values.year,
        color: values.color,
        registration_number: values.registrationNumber,
      });

      await axios.post('http://127.0.0.1:5690/payments', {
        customer_id: customerId,
        policy_id: policyId,
        payment_date: new Date().toISOString().split('T')[0],
        amount: coverageAmount,
        payment_method: 'your_payment_method',
      });

      console.log('Policy purchased successfully');
      
      // Navigate to PolicyDetails page with policyId in location state
      navigate('/customertable');
    } catch (error) {
      console.error('Error purchasing policy:', error.response?.data?.error || error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handlePolicyChange = (event) => {
    const selectedPolicy = event.target.value;

    setPolicyType(selectedPolicy);

    switch (selectedPolicy) {
      case 'comprehensive':
        setCoverageAmount(8550.5);
        break;
      case 'zero_depreciation':
        setCoverageAmount(10000);
        break;
      case 'third_party':
        setCoverageAmount(7500.75);
        break;
      default:
        setCoverageAmount(0);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <div className='form'>
      <Form>
        <div>
          <label>Name</label>
          <Field type="text" id="Name" name="Name" />
          <ErrorMessage name="Name" component="div" />
        </div>

        <div>
          <label>Email</label>
          <Field type="email" id="email" name="email"/>
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label>Phone</label>
          <Field type="text" id="phone" name="phone"/>
          <ErrorMessage name="phone" component="div" />
        </div>

        <div>
          <label>Car Model</label>
          <Field type="text" id="model" name="model" />
          <ErrorMessage name="model" component="div" />
        </div>

        <div>
          <label>Car Year</label>
          <Field type="number" id="year" name="year" />
          <ErrorMessage name="year" component="div" />
        </div>

        <div>
          <label>Car Color</label>
          <Field type="text" id="color" name="color" />
          <ErrorMessage name="color" component="div" />
        </div>

        <div>
          <label>Registration Number</label>
          <Field type="text" id="registrationNumber" name="registrationNumber" />
          <ErrorMessage name="registrationNumber" component="div" />
        </div>

        <div>
          <label>Card Number</label>
          <Field type="text" id="cardNumber" name="cardNumber" />
          <ErrorMessage name="cardNumber" component="div" />
        </div>

        <div>
          <label>Expiration Date</label>
          <Field type="text" id="expirationDate" name="expirationDate" />
          <ErrorMessage name="expirationDate" component="div" />
        </div>

        <div>
          <label>CVV</label>
          <Field type="text" id="cvv" name="cvv" />
          <ErrorMessage name="cvv" component="div" />
        </div>

        <div>
          <label>Select Policy</label>
          <Field as="select" id="policyType" name="policyType" onChange={handlePolicyChange}>
            <option value="">Select Policy</option>
            <option value="comprehensive">Comprehensive</option>
            <option value="zero_depreciation">Zero Depreciation</option>
            <option value="third_party">Third Party</option>
          </Field>
          <ErrorMessage name="policyType" component="div" />
        </div>

        <div>
          <label>Coverage Amount</label>
          <Field type="text" id="coverageAmount" name="coverageAmount" value={coverageAmount.toFixed(2)} readOnly />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
      </div>
    </Formik>
  );
};

export default BuyNow;
