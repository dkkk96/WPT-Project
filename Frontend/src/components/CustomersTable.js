import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./CustomerTable.css";

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [editingVehicle, setEditingVehicle] = useState(null);

  useEffect(() => {
    // Fetch customers and vehicles when the component mounts
    fetchCustomers();
    fetchVehicles();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5690/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error.response?.data?.error || error.message);
    }
  };

  const fetchVehicles = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5690/vehicles');
      setVehicles(response.data);
    } catch (error) {
      console.error('Error fetching vehicles:', error.response?.data?.error || error.message);
    }
  };

  const updateVehicle = async (vehicleId) => {
    try {
      const updatedVehicle = vehicles.find((vehicle) => vehicle.vehicle_id === vehicleId);

      await axios.put(`http://127.0.0.1:5690/vehicles/${vehicleId}`, updatedVehicle);
      setEditingVehicle(null);
    } catch (error) {
      console.error('Error updating vehicle:', error.response?.data?.error || error.message);
    }
  };

  const deleteVehicle = async (vehicleId) => {
    try {
      await axios.delete(`http://127.0.0.1:5690/vehicles/${vehicleId}`);
      // Refresh the vehicle list after deleting a vehicle
      fetchVehicles();
    } catch (error) {
      console.error('Error deleting vehicle:', error.response?.data?.error || error.message);
    }
  };

  const handleEditVehicle = (vehicleId) => {
    setEditingVehicle(vehicleId);
  };

  const handleInputChangeVehicle = (e, vehicleId, field) => {
    const updatedVehicles = vehicles.map((vehicle) =>
      vehicle.vehicle_id === vehicleId ? { ...vehicle, [field]: e.target.value } : vehicle
    );

    setVehicles(updatedVehicles);
  };

  return (
    <div className='form'>
      <h1>Customer List</h1>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Vehicle List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer ID</th>
            <th>Policy ID</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Registration Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.vehicle_id}>
              <td>{vehicle.vehicle_id}</td>
              <td>{vehicle.customer_id}</td>
              <td>{vehicle.policy_id}</td>
              <td>
                {editingVehicle === vehicle.vehicle_id ? (
                  <input
                    type="text"
                    value={vehicle.model}
                    onChange={(e) => handleInputChangeVehicle(e, vehicle.vehicle_id, 'model')}
                  />
                ) : (
                  vehicle.model
                )}
              </td>
              <td>
                {editingVehicle === vehicle.vehicle_id ? (
                  <input
                    type="number"
                    value={vehicle.year}
                    onChange={(e) => handleInputChangeVehicle(e, vehicle.vehicle_id, 'year')}
                  />
                ) : (
                  vehicle.year
                )}
              </td>
              <td>
                {editingVehicle === vehicle.vehicle_id ? (
                  <input
                    type="text"
                    value={vehicle.color}
                    onChange={(e) => handleInputChangeVehicle(e, vehicle.vehicle_id, 'color')}
                  />
                ) : (
                  vehicle.color
                )}
              </td>
              <td>{vehicle.registration_number}</td>
              <td>
                {editingVehicle === vehicle.vehicle_id ? (
                  <>
                    <button onClick={() => updateVehicle(vehicle.vehicle_id)} className='save-button'>Save</button>
                    &nbsp;
                    <button onClick={() => setEditingVehicle(null)} className='cancel-button'>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditVehicle(vehicle.vehicle_id)} className='edit-button'>Edit</button>
                    &nbsp;
                    <button onClick={() => deleteVehicle(vehicle.vehicle_id)} className='delete-button'>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
