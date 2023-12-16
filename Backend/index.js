import express from 'express';
import { initializeDatabase } from './database.js';
import { createTables } from './CreateTables.js';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
app.use(cors());
app.use(express.json());

const pool = await initializeDatabase();
await createTables();

// JWT Secret Key (keep this secret and secure)
const jwtSecretKey = 'your-secret-key';

// Middleware to check if the request has a valid JWT token
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ success: false, error: 'Access denied. Token not provided.' });

  jwt.verify(token, jwtSecretKey, (err, user) => {
    if (err) return res.status(403).json({ success: false, error: 'Invalid token.' });

    req.user = user; // Attach the user information to the request
    next();
  });
};


//Login API

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const [rows] = await pool.execute('SELECT customer_id, customer_name, email, password FROM customers WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    const user = rows[0];

    // Compare the provided password with the hashed password stored in the database
    bcrypt.compare(password, user.password, (err, passwordMatch) => {
      if (err || !passwordMatch) {
        return res.status(401).json({ success: false, error: 'Invalid credentials' });
      }

      // Passwords match, generate JWT token
      const token = jwt.sign({ email: user.email, userId: user.customer_id }, jwtSecretKey, { expiresIn: '1h' });

      // Send the token in the response
      res.json({ success: true, token, user: { email: user.email, customer_id: user.customer_id } });
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


// Customer API
// const bcrypt = require('bcrypt');

app.post('/customers', async (req, res) => {
  try {
    const { customer_name, email, phone, password } = req.body;

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.execute(
      'INSERT INTO customers (customer_name, email, phone, password) VALUES (?, ?, ?, ?)',
      [customer_name, email, phone, hashedPassword]
    );

    res.status(201).json({ customer_id: result.insertId, message: 'Customer created successfully' });
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


 // GET endpoint to retrieve data from the customers table
 app.get('/customers', async (req, res) => {
  try {
    const [rows, fields] = await pool.execute('SELECT customer_id, customer_name, email, phone FROM customers');
    res.json(rows);
  } catch (error) {
    console.error('Error handling GET request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



 // GET endpoint to retrieve data from the customers table based on customer ID
 app.get('/customers/:customerId', async (req, res) => {
  try {
    const { customerId } = req.params;
    const [rows, fields] = await pool.execute('SELECT customer_id,customer_name, email, phone FROM customers WHERE customer_id = ?', [customerId]);

    if (rows.length === 0) {
      res.status(404).json({ error: 'Customer not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error('Error handling GET request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// PUT endpoint to update customer details based on customer ID
app.put('/customers/:customerId', async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const { Name, email, phone, password } = req.body;

    // Update customer details in the database based on the customer ID
    await pool.execute(
      'UPDATE customers SET Name = ?,  email = ?, phone = ?, password=? WHERE customer_id = ?',
      [Name, email, phone, password, customerId]
    );

    res.status(200).json({ message: 'Customer details updated successfully' });
  } catch (error) {
    console.error('Error updating customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Delete customer details in the database based on the customer ID
app.delete('/customers/:customerId', async (req, res) => {
  try {
    const customerId = req.params.customerId;

    // Delete customer from the database based on the customer ID
    await pool.execute('DELETE FROM customers WHERE customer_id = ?', [customerId]);

    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    console.error('Error deleting customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Policies API
app.post('/policies', async (req, res) => {
  try {
    const { customer_id,policy_type,coverage_amount,start_date, end_date } = req.body;

    const [result] = await pool.execute(
      'INSERT INTO policies (customer_id,policy_type,coverage_amount,start_date, end_date) VALUES (?, ?, ?, ?,?)',
      [customer_id,policy_type,coverage_amount,start_date, end_date]
    );

    res.status(201).json({ policy_id: result.insertId, message: 'Policies of customer is created successfully' });
  } catch (error) {
    console.error('Error creating policy:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

 // GET endpoint to retrieve data from the policies table
 app.get('/policies', async (req, res) => {
  try {
    const [rows, fields] = await pool.execute('SELECT * FROM policies');
    res.json(rows);
  } catch (error) {
    console.error('Error handling GET request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 
 // GET endpoint to retrieve data from the policies table based on policy ID
 app.get('/policies/:policyId', async (req, res) => {
  try {
    const { policyId } = req.params;
    const [rows, fields] = await pool.execute('SELECT * FROM policies WHERE policy_id = ?', [policyId]);

    if (rows.length === 0) {
      res.status(404).json({ error: 'Policy not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error('Error handling GET request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// PUT endpoint to update policies details based on policy ID
app.put('/policies/:policyId', async (req, res) => {
  try {
    const policyId = req.params.policyId;
    const { customer_id,policy_type,coverage_amount,start_date, end_date } = req.body;

    // Update customer details in the database based on the customer ID
    await pool.execute(
      'UPDATE policies SET customer_id=? ,policy_type=?,coverage_amount=?,start_date=?, end_date=? WHERE policy_id=?',
      [customer_id,policy_type,coverage_amount,start_date, end_date,policyId]
    );

    res.status(200).json({ message: 'Policy details updated successfully' });
  } catch (error) {
    console.error('Error updating customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


//Delete policy details in the database based on the policy ID

app.delete('/policies/:policyId', async (req, res) => {
  try {
    const policyId = req.params.customerId;

    // Delete customer from the database based on the policy ID
    await pool.execute('DELETE FROM policies WHERE policy_id = ?', [policyId]);

    res.status(200).json({ message: 'Policy deleted successfully' });
  } catch (error) {
    console.error('Error deleting policy:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


//vehicle API
// Create a new vehicle
app.post('/vehicles', async (req, res) => {
  try {
    const { customer_id, policy_id, model, year, color, registration_number } = req.body;

    const [result] = await pool.execute(
      'INSERT INTO vehicles (customer_id, policy_id, model, year, color, registration_number) VALUES ( ?, ?, ?, ?, ?, ?)',
      [customer_id, policy_id, model, year,  color, registration_number]
    );

    res.status(201).json({ vehicle_id: result.insertId, message: 'Vehicle created successfully' });
  } catch (error) {
    console.error('Error creating vehicle:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET endpoint to retrieve data from the vehicles table
app.get('/vehicles', async (req, res) => {
  try {
    const [rows, fields] = await pool.execute('SELECT * FROM vehicles');
    res.json(rows);
  } catch (error) {
    console.error('Error handling GET request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET endpoint to retrieve data from the vehicles table based on vehicle ID
app.get('/vehicles/:vehicleId', async (req, res) => {
  try {
    const { vehicleId } = req.params;
    const [rows, fields] = await pool.execute('SELECT * FROM vehicles WHERE vehicle_id = ?', [vehicleId]);

    if (rows.length === 0) {
      res.status(404).json({ error: 'Vehicle not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error('Error handling GET request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT endpoint to update vehicle details based on vehicle ID
app.put('/vehicles/:vehicleId', async (req, res) => {
  try {
    const vehicleId = req.params.vehicleId;
    const { customer_id, policy_id, model, year, color, registration_number } = req.body;

    // Update vehicle details in the database based on the vehicle ID
    await pool.execute(
      'UPDATE vehicles SET customer_id=?, policy_id=?, model=?, year=?, color=?, registration_number=? WHERE vehicle_id=?',
      [customer_id, policy_id, model, year, color, registration_number, vehicleId]
    );

    res.status(200).json({ message: 'Vehicle details updated successfully' });
  } catch (error) {
    console.error('Error updating vehicle:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete vehicle details in the database based on the vehicle ID
app.delete('/vehicles/:vehicleId', async (req, res) => {
  try {
    const vehicleId = req.params.vehicleId;

    // Delete vehicle from the database based on the vehicle ID
    await pool.execute('DELETE FROM vehicles WHERE vehicle_id = ?', [vehicleId]);

    res.status(200).json({ message: 'Vehicle deleted successfully' });
  } catch (error) {
    console.error('Error deleting vehicle:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Payment API
app.post('/payments', async (req, res) => {
  try {
    const { customer_id, policy_id, payment_date, amount, payment_method } = req.body;

    const [result] = await pool.execute(
      'INSERT INTO payments (customer_id, policy_id, payment_date, amount, payment_method) VALUES (?, ?, ?, ?, ?)',
      [customer_id, policy_id, payment_date, amount, payment_method]
    );

    res.status(201).json({ payment_id: result.insertId, message: 'Payment details inserted successfully' });
  } catch (error) {
    console.error('Error creating payment details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET endpoint to retrieve data from the payments table
app.get('/payments', async (req, res) => {
  try {
    const [rows, fields] = await pool.execute('SELECT * FROM payments');
    res.json(rows);
  } catch (error) {
    console.error('Error handling GET request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET endpoint to retrieve data from the payments table based on payment ID
app.get('/payments/:paymentId', async (req, res) => {
  try {
    const { paymentId } = req.params;
    const [rows, fields] = await pool.execute('SELECT * FROM payments WHERE payment_id = ?', [paymentId]);

    if (rows.length === 0) {
      res.status(404).json({ error: 'Payment details not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error('Error handling GET request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT endpoint to update payment details based on payment ID
app.put('/payments/:paymentId', async (req, res) => {
  try {
    const paymentId = req.params.paymentId;
    const { customer_id, policy_id, payment_date, amount, payment_method } = req.body;

    // Update payment details in the database based on the payment ID
    await pool.execute(
      'UPDATE payments SET customer_id=?, policy_id=?, payment_date=?, amount=?, payment_method=? WHERE payment_id=?',
      [customer_id, policy_id, payment_date, amount, payment_method, paymentId]
    );

    res.status(200).json({ message: 'Payment details updated successfully' });
  } catch (error) {
    console.error('Error updating payment details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete payment details in the database based on the payment ID
app.delete('/payments/:paymentId', async (req, res) => {
  try {
    const paymentId = req.params.paymentId;

    // Delete payment from the database based on the payment ID
    await pool.execute('DELETE FROM payments WHERE payment_id = ?', [paymentId]);

    res.status(200).json({ message: 'Payment details deleted successfully' });
  } catch (error) {
    console.error('Error deleting payment details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Start the server
const PORT = 5690;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});