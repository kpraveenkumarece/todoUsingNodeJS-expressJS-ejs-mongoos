const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/todoapp', {
    mongoose.connect('mongodb+srv://kpk00700:12345@cluster0.wouzipx.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error connecting to MongoDB:', error.message);
});

module.exports = mongoose;
