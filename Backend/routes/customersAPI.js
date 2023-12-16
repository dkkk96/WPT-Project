import express from "express";
import {pool} from "../database.js";
import { createTables } from "../CreateTables.js";
import { Router } from "express";


const router = express.Router();

// const pool = await initializeDatabase();
createTables();

// craete new customer
router.post('/customers', async (req, res) => {
  try {
    const { first_name, last_name, email, phone } = req.body;

    const [result] = await pool.execute(
      'INSERT INTO customers (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)',
      [first_name, last_name, email, phone]
    );

    res.status(201).json({ customer_id: result.insertId, message: 'Customer created successfully' });
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

 // GET endpoint to retrieve data from the customers table
 router.get('/customers', async (req, res) => {
  try {
    const [rows, fields] = await pool.execute('SELECT * FROM customers');
    res.json(rows);
  } catch (error) {
    console.error('Error handling GET request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

 // GET endpoint to retrieve data from the customers table based on customer ID
 router.get('/customers/:customerId', async (req, res) => {
  try {
    const { customerId } = req.params;
    const [rows, fields] = await pool.execute('SELECT * FROM customers WHERE customer_id = ?', [customerId]);

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
router.put('/customers/:customerId', async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const { first_name, last_name, email, phone } = req.body;

    // Update customer details in the database based on the customer ID
    await pool.execute(
      'UPDATE customers SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE customer_id = ?',
      [first_name, last_name, email, phone, customerId]
    );

    res.status(200).json({ message: 'Customer details updated successfully' });
  } catch (error) {
    console.error('Error updating customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Delete customer details in the database based on the customer ID
router.delete('/customers/:customerId', async (req, res) => {
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

export default router;