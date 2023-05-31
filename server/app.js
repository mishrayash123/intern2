require('dotenv').config();
const dbConnection = require('./config/database');
const express = require('./config/express');

const app = require('express')();

// Your code
if (process.env.NODE_ENV === "production") {
    const path = require("path");
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'),function (err) {
            if(err) {
                res.status(500).send(err)
            }
        });
    })
}
// Your code


dbConnection().then(() => {

    require('./config/express')(app);

    require('./config/routes')(app);

    app.listen(5000, console.log(`Listening on port ${5000}!`));
    console.log('Connected to MongoDB');

}).catch(console.error);
