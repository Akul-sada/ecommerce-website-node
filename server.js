const dotenv = require('dotenv');
const app = require('./app');
/*
This code is used to configure environment variables in a node.js project. The first line loads the 'dotenv' module, which allows you to access environment variables from a file. The second line sets the port for the server to run on, using the 'PORT' environment variable if it exists, or using a default port of 3000. The third line tells the dotenv module to load the environment variables from the './config.env' file.
open ai playground
*/
dotenv.config({path:'./config.env'});



/*
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code

https://www.npmjs.com/package/dotenv

*/


const port = process.env.PORT || 3000;
const server = app.listen(port, ()=>{
    console.log(`App running on port ${port}...`);
});