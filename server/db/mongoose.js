const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true})
    .then(() => {
        console.log("Connected to database!")
    })
    .catch(() => {
        console.log("Connection Failed!!")
    });

module.exports = {mongoose};