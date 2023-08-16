var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Change the database connection URL with yours
mongoose.connect("mongodb+srv://ganeshmmarolix:GHWKf3Amlwl822fr@cluster0.ykazdov.mongodb.net/?retryWrites=true&w=majority");

module.exports = { mongoose };
