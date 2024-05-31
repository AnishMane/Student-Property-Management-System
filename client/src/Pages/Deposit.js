import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Deposit = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   registrationNumber: '',
  //   depositionRoomNumber: '',
  //   bucket: 0,
  //   blanket: 0,
  //   mattress: 0,
  //   others: '',
  // });
  const [name, setName] = useState("");
  const [registrationNumber, setRegNo] = useState("");
  const [depositionRoomNumber, setRoomNo] = useState("");
  const [bucket, setBucket] = useState(0);
  const [blanket, setBlanket] = useState(0);
  const [mattress, setMattress] = useState(0);
  const [others, setOthers] = useState("");
  const [error,setError] = useState("");


  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const addUser = {
      name,
      registrationNumber,
      depositionRoomNumber,
      bucket,
      blanket ,
      mattress ,
      others, 
    };
    const response = await fetch("http://localhost:5000", {
            method: "POST",
            body: JSON.stringify(addUser),
            headers:{
                "Content-Type": "application/json",
            }
        });
    const result = await response.json();

    if(!response.ok)
        {
                console.log(result.error);
                setError(result.error)
        }
    else{
                console.log(result);
                setError("");
                setName("");
                setRegNo("");
                setRoomNo("");
                setBucket(0);
                setBlanket(0);
                setMattress(0);
                setOthers("");
        
  }
}

  return (
  <div className='container my-2'>
  {error && <div class="alert alert-danger" >
  {error}
</div>}
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <label htmlFor="registrationNumber">Registration Number:</label>
        <input
          type="text"
          id="registrationNumber"
          name="registrationNumber"
          value={registrationNumber}
          onChange={(e) => setRegNo(e.target.value)}
          required
        />
        <br />

        <label htmlFor="depositionRoomNumber">Deposition Room Number:</label>
        <input
          type="text"
          id="depositionRoomNumber"
          name="depositionRoomNumber"
          value={depositionRoomNumber}
          onChange={(e) => setRoomNo(e.target.value)}
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
          value={bucket}
          onChange={(e) => setBucket(e.target.value)}
           placeholder="Enter Number of Buckets"
        />
        <br />

        <label htmlFor="blanket">Blanket:</label>
        <input
          type="text" // Changed to text input
          id="blanket"
          name="blanket"
          value={blanket}
          onChange={(e) => setBlanket(e.target.value)}
          placeholder="Enter Number of Blankets"
        />
        <br />

        <label htmlFor="mattress">Mattress:</label>
        <input
          type="text" // Changed to text input
          id="mattress"
          name="mattress"
          value={mattress}
          onChange={(e) => setMattress(e.target.value)}
          placeholder="Enter Number of Mattresses"
        />
        <br />

        <label htmlFor="others">Others:</label>
        <input
          type="text"
          id="others"
          name="others"
          value={others}
          onChange={(e) => setOthers(e.target.value)}
          placeholder='Enter Your Other Articles'
        />
        <br />

        <button type="submit">Submit Deposit</button>
      </form>
    </div>
  </div>
  );
};

export default Deposit;
