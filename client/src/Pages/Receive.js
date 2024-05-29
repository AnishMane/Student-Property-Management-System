import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Assuming you have a separate searchItems function
function searchItems(registrationNumber) {
  // Implement your search logic here using the registrationNumber
  // This could involve making an API call to your backend or performing a local search
  console.log('Searching for registration number:', registrationNumber); // Example logging
}

const Receive = () => {
  const [formData, setFormData] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Call your search function with the registration number from formData
    // searchItems(formData.registrationNumber);

    // You can optionally clear the form or display a success message here
  };

  return (
    <div >
        <div style={{
        backgroundImage: 'url("./rev.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
        height: '100vh'
      }}>
      <Link className="back" to="/admin">Back</Link>
        
      <form onSubmit={handleSubmit}>
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

        <button type="submit" >Search Student</button>
      </form>
      </div>
    </div>
  );
};

export default Receive;