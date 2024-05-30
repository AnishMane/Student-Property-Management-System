const mongoose=require('mongoose');

const depositSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    registrationNumber: {
      type: String,
      required: true
    },
    depositionRoomNumber: {
      type: String,
      required: true
    },
    bucket: {
      type: Number, // Assuming number of buckets
      default: 0
    },
    blanket: {
      type: Number, // Assuming number of blankets
      default: 0
    },
    mattress: {
      type: Number, // Assuming number of mattresses
      default: 0
    },
    others: {
      type: String, // For other items
      default: ''
    }
  });
  
module.exports = mongoose.model('Deposit', depositSchema);
  