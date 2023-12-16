// CraeteTables.js

import  {pool} from "./database.js";


export const createTables = async () => {
  try {
    //Customers Table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS customers (
        customer_id INT AUTO_INCREMENT PRIMARY KEY,
        customer_name VARCHAR(50),
        email VARCHAR(50) UNIQUE,
        phone VARCHAR(20),
        password VARCHAR(10)
      )
    `);

    await pool.execute(`
    ALTER TABLE customers MODIFY COLUMN password VARCHAR(255);
  `);

    // Policies Table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS policies (
        policy_id INT AUTO_INCREMENT PRIMARY KEY,
        customer_id INT,
        policy_type VARCHAR(50),
        coverage_amount DECIMAL(10, 2),
        start_date DATE,
        end_date DATE,
        FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
      )
    `);

    // Inside createTables function
console.log('Before creating tables');



    //Vehicle table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS vehicles (
        vehicle_id INT AUTO_INCREMENT PRIMARY KEY,
        customer_id INT,
        policy_id INT,
        model VARCHAR(50),
        year INT,
        color VARCHAR(20),
        registration_number VARCHAR(15),
        FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
        FOREIGN KEY (policy_id) REFERENCES policies(policy_id)
      )
    `);

    console.log('After creating tables');

    // //Coverage Types table
    // await pool.execute(`
    //   CREATE TABLE IF NOT EXISTS coveragetypes (
    //     coverage_type_id INT AUTO_INCREMENT PRIMARY KEY,
    //     name VARCHAR(50) NOT NULL,
    //     description VARCHAR(255),
    //     PRIMARY KEY (coverage_type_id)
    // );
    // `)

    // //Claims Table
    // await pool.execute(`
    // CREATE TABLE IF NOT EXISTS claims (
    //   claim_id INT AUTO_INCREMENT PRIMARY KEY,
    //   customer_id INT,
    //   policy_id INT,
    //   claim_date DATE,
    //   description VARCHAR(255),
    //   status VARCHAR(50),
    //   PRIMARY KEY (claim_id),
    //   FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    //   FOREIGN KEY (policy_id) REFERENCES policies(policy_id)
    // );
    // `)

    //Payment table
    await pool.execute(`
    CREATE TABLE IF NOT EXISTS payments (
      payment_id INT AUTO_INCREMENT PRIMARY KEY,
      customer_id INT,
      policy_id INT,
      payment_date DATE,
      amount DECIMAL(10, 2),
      payment_method VARCHAR(50),
      FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
      FOREIGN KEY (policy_id) REFERENCES policies(policy_id)
    );
    `)

    

    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
  } 
  // finally {
  //   await pool.end(); // Close the connection pool
  // }
};

// createTables();
