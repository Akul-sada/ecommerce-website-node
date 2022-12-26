const express = require('express');
/*
express.Router() creates an instance of a Router object which can be used to define routes and middleware for requests. It also allows you to define parameters, view handlers, and more.
https://www.geeksforgeeks.org/express-js-express-router-function/

The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. 
*/
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Hello World!');
});