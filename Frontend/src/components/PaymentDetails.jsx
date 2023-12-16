// PaymentDetails.js

import React from 'react';

const PaymentDetails = ({ policyId, coverageAmount }) => {
  // Implement rendering of payment details using policyId and coverageAmount
  return (
    <div>
      <h2>Payment Details</h2>
      <p>Policy ID: {policyId}</p>
      <p>Coverage Amount: {coverageAmount.toFixed(2)}</p>
    </div>
  );
};

export default PaymentDetails;
