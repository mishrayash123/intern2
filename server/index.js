require('dotenv').config();
const dbConnection = require('./config/database');
const express = require('./config/express');

const app = require('express')();

if(process.env.NODE_ENV== "production"){
    app.use(express.static("client/build"));
}

dbConnection().then(() => {

    require('./config/express')(app);

    require('./config/routes')(app);

    app.listen(5000, console.log(`Listening on port ${5000}!`));
    console.log('Connected to MongoDB');

}).catch(console.error);
