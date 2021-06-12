const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const port = 8080;

const MongoClient = require('mongodb').MongoClient;
// const uri = `mongodb+srv://dbUser:${process.env.mongo_password}@slider.opswz.mongodb.net/booksDB?retryWrites=true&w=majority`;
const uri = `mongodb+srv://dbUser:${process.env.mongo_password}@cluster0.krusy.mongodb.net/booksDB?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology: true, connectTimeoutMS: 30000, keepAlive: 1 });

client.connect()

// Google Books API Query => https://www.googleapis.com/books/v1/volumes?q=${titleQuery}+intitle

app.get('/', (req, res) => {
    res.send('hello');
})

// GET BOOKS ROUTE

// POST BOOKS ROUTE

// DELTE BOOKS ROUTE

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});