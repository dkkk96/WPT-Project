import { createPool } from 'mysql2/promise';

let pool;

export const initializeDatabase = async () => {
  try {
    // Create a connection pool
    pool = createPool({
      host: 'localhost',
      user: 'root',
      password: 'cdac',
      database: 'car_insurance',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    // Create tables and perform other initialization tasks if needed

    console.log('Database initialized successfully');
    return pool;
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error; // Propagate the error to the caller
  }
};

// Export the pool for use in other modules
export { pool };