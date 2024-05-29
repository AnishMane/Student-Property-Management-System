import { useState } from 'react';
import {Link} from 'react-router-dom'


const Student = () => {

    const [formData, setFormData] = useState({
        registrationNumber: '',
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
    
        // Call your search function with the registration number from formData
        // searchItems(formData.registrationNumber);
    
        // You can optionally clear the form or display a success message here
      };

    return(
        <div>
            <Link className='back' to='/'>Back</Link>
            <div style={{
        backgroundImage: 'url("./eliott-reyna-jCEpN62oWL4-unsplash.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
        height: '100vh'
      }}>

            
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

        <button type="submit">Search Student</button>
      </form>
      </div>
        </div>
    )
}

export default Student;