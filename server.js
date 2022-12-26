const dotenv = require('dotenv');
const app = require('./app');



/*
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code

https://www.npmjs.com/package/dotenv

*/
const port = process.env.PORT || 3000;
const server = app.listen(port, ()=>{
    console.log(`App running on port ${port}...`);
});