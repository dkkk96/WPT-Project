// BuyNowButton.js

import React, { useState } from 'react';
import BuyNow from './BuyNow.jsx'; // Import your BuyNowForm component
import { Button } from 'react-bootstrap';

const BuyNowButton = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBuyNowClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleBuyNowClick}>
        Buy-Now
      </Button>
      {showForm && <BuyNow />}
    </div>
  );
};

export default BuyNowButton;