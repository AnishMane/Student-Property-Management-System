import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Deposit = () => {
  const [formData, setFormData] = useState({
    name: '',
    registrationNumber: '',
    depositionRoomNumber: '',
    bucket: '',
    blanket: '',
    mattress: '',
    others: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Implement your form submission logic here (e.g., send data to server)
    console.log('Form data:', formData); // Example logging for development
  };

  return (
    <div style={{
        backgroundImage: 'url("./pic.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
      }}>
      <Link className='back' to='/admin'>Back</Link>

      <h2 style={{
        color: 'whitesmoke'
      }}>Deposit Form</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="registrationNumber">Registration Number:</label>
        <input
          type="text"
          id="registrationNumber"
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="depositionRoomNumber">Deposition Room Number:</label>
        <input
          type="text"
          id="depositionRoomNumber"
          name="depositionRoomNumber"
          value={formData.depositionRoomNumber}
          onChange={handleChange}
          required
        />
        <br />

        <label className='items'><u>ITEMS</u></label>
        <br />

        <label htmlFor="bucket">Bucket:</label>
        <input
          type="text" // Changed to text input
          id="bucket"
          name="bucket"
          value={formData.bucket}
          onChange={handleChange}
           placeholder="Enter Number of Buckets"
        />
        <br />

        <label htmlFor="blanket">Blanket:</label>
        <input
          type="text" // Changed to text input
          id="blanket"
          name="blanket"
          value={formData.blanket}
          onChange={handleChange}
          placeholder="Enter Number of Blankets"
        />
        <br />

        <label htmlFor="mattress">Mattress:</label>
        <input
          type="text" // Changed to text input
          id="mattress"
          name="mattress"
          value={formData.mattress}
          onChange={handleChange}
          placeholder="Enter Number of Mattresses"
        />
        <br />

        <label htmlFor="others">Others:</label>
        <input
          type="text"
          id="others"
          name="others"
          value={formData.others}
          onChange={handleChange}
          placeholder='Enter Your Other Articles'
        />
        <br />

        <button type="submit">Submit Deposit</button>
      </form>
    </div>
  );
};

export default Deposit;
