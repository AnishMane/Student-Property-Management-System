import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Assuming you have a separate searchItems function
// function searchItems(registrationNumber) {
//   // Implement your search logic here using the registrationNumber
//   // This could involve making an API call to your backend or performing a local search
//   console.log('Searching for registration number:', registrationNumber); // Example logging
// }

const Receive = () => {
 
  const [registrationNumber, setRegNo] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const registrationNumber = "some_registration_number"; // Ensure this is defined or passed correctly

    try {
        const response = await fetch(`http://localhost:5000/user?registrationNumber=${registrationNumber}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const result = await response.json();

        if (!response.ok) {
            console.log(result.error);
            setError(result.error); // Make sure setError is defined in your component
        } else {
            console.log(result);
            setError(""); // Clear any previous error
            setRegNo(""); // Reset registration number if needed
        }
    } catch (error) {
        console.error("Error:", error);
        setError("An unexpected error occurred."); // Handle any unexpected errors
    }
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
          value={registrationNumber}
          onChange={(e) => {setRegNo(e.target.value)}}
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