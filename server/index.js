require('dotenv').config();
const dbConnection = require('./config/database');

const app = require('express')();

dbConnection().then(() => {

    require('./config/express')(app);

    require('./config/routes')(app);

    app.listen(5000, console.log(`Listening on port ${5000}!`));
    console.log('Connected to MongoDB');

}).catch(console.error);
