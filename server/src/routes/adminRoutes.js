const express = require('express');
const router=express.Router();
const app = express();

const { handleUserDeposit }=require('../controller/depositController.js');
const { getUserDetailsByRegistrationNumber }=require('../controller/equiryController.js');

//app.use(express.static('../'));

// Mount the router with the '/deposit' prefix
app.use('/admin', router);

router.post('/deposit',handleUserDeposit);
router.get('/enquiry',getUserDetailsByRegistrationNumber);

module.exports=router;