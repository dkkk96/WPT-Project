import { pool } from './database.js'; 

export const createUser = async (name, phone, email, password) => {
  try {
    const [result] = await pool.execute(
      'INSERT INTO CUSTOMERS (name, phone, email, password) VALUES (?, ?, ?, ?)',
      [name, phone, email, password]
    );

    return { id: result.insertId, message: 'User created successfully' };
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Internal Server Error');
  }
};