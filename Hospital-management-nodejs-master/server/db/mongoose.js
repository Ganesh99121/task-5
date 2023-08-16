var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Change the database with yours
mongoose.connect(
  "mongodb+srv://ganeshmmarolix:GHWKf3Amlwl822fr@cluster0.ykazdov.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true } // Added options
);

module.exports = { mongoose };
