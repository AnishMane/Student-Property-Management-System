const express = require('express');
//const bodyParser = require('body-parser'); // Assuming you're using body-parser
const Deposit = require("../model/depositModel");

async function handleUserDeposit(req, res) {
    const { name, registrationNumber, depositionRoomNumber, bucket, blanket, mattress, others } = req.body;

    try {
        const userAdded = await Deposit.create({
          name,
          registrationNumber,
          depositionRoomNumber,
          bucket,
          blanket,
          mattress,
          others
        });

        res.status(201).json({userAdded});
    }catch (err) {
        console.error('Error saving deposit data:', err);
        res.status(400).json({ err: err.message });
      }
    };

module.exports = {
    handleUserDeposit,
};    
