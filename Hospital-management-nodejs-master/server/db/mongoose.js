var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Change the database connection URL with yours
mongoose.openUri("mongodb+srv://ganeshmmarolix:GHWKf3Amlwl822fr@cluster0.ykazdov.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB successfully!');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

module.exports = { mongoose };
