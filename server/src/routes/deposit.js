const express = require('express');
const router=express.Router();
const app = express();

const { handleUserDeposit }=require('../controller/deposit');

//app.use(express.static('../'));

// Mount the router with the '/deposit' prefix
app.use('/api', router);

router.post('/deposit',handleUserDeposit);
