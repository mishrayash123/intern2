require('dotenv').config();
const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect('mongodb+srv://mishra:mishra786@cluster0.yrprxjp.mongodb.net/mern1r?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
};