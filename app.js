const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
  res.send('We are on home');
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to DB!');
  }
);

//How to listen to the server
app.listen(3000);
