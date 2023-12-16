// PaymentDetails.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentDetails = ({ policyId }) => {
  const [policyDetails, setPolicyDetails] = useState(null);

  useEffect(() => {
    // Fetch policy details from the database
    const fetchPolicyDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5690/policies/17`); // Adjust the API endpoint as per your server setup
        setPolicyDetails(response.data);
      } catch (error) {
        console.error('Error fetching policy details:', error);
      }
    };

    fetchPolicyDetails();
  }, [policyId]);

  return (
    <div>
      <h2>Payment Details</h2>
      {policyDetails ? (
        <table>
          <thead>
            <tr>
              <th>Policy ID</th>
              <th>Coverage Amount</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{policyDetails.policy_id}</td>
              <td>{policyDetails.coverage_amount}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PaymentDetails;
