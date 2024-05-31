const express=require('express');
const app=express();
const depositRouter=require('./src/routes/adminRoutes');
const enquiryRouter=require('./src/routes/studentRoutes');
const cors = require('cors');

app.use(cors());

//Middleware

app.use(express.json());
//to support form data 
app.use(express.urlencoded({extended:false}));

const PORT=5000;
app.listen(PORT,()=> console.log(`Connected at PORT: ${PORT}`));

const {connectMongoDb}=require('./src/connection');
connectMongoDb("mongodb://127.0.0.1:27017/SPMS");

app.use('/admin', depositRouter);
app.use('/stud',enquiryRouter);