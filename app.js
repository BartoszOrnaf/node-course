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

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(mongoose.connection.readyState);
  }
);

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://testUser1:testUser1@cluster1.rkow3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   console.log(err)
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


console.log(mongoose.connection.readyState);
//How to listen to the server
app.listen(4000);
