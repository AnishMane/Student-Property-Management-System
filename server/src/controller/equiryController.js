const Deposit = require("../model/depositModel");

async function getUserDetailsByRegistrationNumber(req,res) {
     
    const {registrationNumber} =req.params;

    try {
      // Fetch the user document using findOne() with a filter on registrationNumber
      const user = await Deposit.findOne({ registrationNumber });
  
      // Check if a user is found
      if (!user) {
        return res.json({ message: 'No user found with that registration number.' });
      }
  
      // Return the complete user details
      return res.json(user);
    } catch (err) {
      console.error('Error fetching user details:', err);
      return res.status(500).json({ message: 'Error: Please try again later.' });
    }
  }

module.exports={
    getUserDetailsByRegistrationNumber,
}  