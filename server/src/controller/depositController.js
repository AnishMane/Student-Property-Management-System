const express = require('express');
//const bodyParser = require('body-parser'); // Assuming you're using body-parser
const Deposit = require("../model/depositModel");

async function handleUserDeposit(req, res) {
    const { name, registrationNumber, depositionRoomNumber, bucket, blanket, mattress, others } = req.body;

    try {
        await Deposit.create({
          name,
          registrationNumber,
          depositionRoomNumber,
          bucket,
          blanket,
          mattress,
          others
        });

        res.json({ message: 'Deposit data saved successfully!'});
    }catch (err) {
        console.error('Error saving deposit data:', err);
        res.status(500).json({ message: 'Error: Please try again later.' });
      }
    };

module.exports = {
    handleUserDeposit,
};    
