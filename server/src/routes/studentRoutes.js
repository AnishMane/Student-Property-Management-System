const express = require('express');
const router=express.Router();
const app = express();

const { getUserDetailsByRegistrationNumber }=require('../controller/equiryController.js');

app.use(express.static('../'));

// Mount the router with the '/enquiry' prefix
app.use('/stud', router);

router.get('/enquiry',getUserDetailsByRegistrationNumber);

module.exports=router;