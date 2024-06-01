import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Assuming style.css is in the same directory


// Assuming you have a separate searchItems function
// function searchItems(registrationNumber) {
//   // Implement your search logic here using the registrationNumber
//   // This could involve making an API call to your backend or performing a local search
//   console.log('Searching for registration number:', registrationNumber); // Example logging
// }

const Receive = () => {
 
  const [registrationNumber, setRegNo] = useState("");
  const [error,setError] = useState("");
  const [searchResult, setSearchResult] = useState(null); // State to store search result

  const handleSubmit = async (event) => {
    event.preventDefault();

    

    try {
        const response = await fetch(`http://localhost:5000/stud/enquiry/${registrationNumber}`, {
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
          //window.location.href= 'Deposit';
            console.log(result);
            setSearchResult(result); // Update search result state
        }
    } catch (error) {
        console.error("Error:", error);
        setError("An unexpected error occurred."); // Handle any unexpected errors
    }
};

// Rest of your component code, including searchResult and table definition


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

      
      {/* Conditionally render the table based on searchResult */}
      {searchResult && ( // Check if searchResult exists
        <table>
        <thead>
        <tr>
          {/* Dynamically generate table headers based on result object keys */}
          {Object.keys(searchResult)
            // Filter out the "_id" key before mapping
            .filter((key) => key !== '_id')
            .filter((key) => key !== '__v')
            .map((key) => {
              // Use a dictionary to map specific keys to desired header names
              const headerNameMap = {
                name: 'Name',
                registrationNumber: 'Registration Number',
                depositionRoomNumber: 'Room Number',
                bucket: 'Bucket',
                blanket: 'Blanket',
                mattress: 'Mattress',
                others: 'Other Belongings',
              };

              // Use the dictionary lookup or fallback to the original key
              return (
                <th key={key}>
                  {headerNameMap[key] || key}
                </th>
              );
            })}
        </tr>



        </thead>
        <tbody>
        <tr>
          {/* Dynamically generate table cells based on result object values */}
          {Object.values(searchResult)
            // Filter out the "_id" and "__v" values before mapping
            .filter((value, index) => Object.keys(searchResult)[index] !== '_id' && Object.keys(searchResult)[index] !== '__v')
            .map((value) => (
              <td key={value}>{value}</td>
            ))}
        </tr>

        </tbody>
      </table>

)}

      </div>
    </div>
  );
};

export default Receive;