const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
const port = 8080;

const MongoClient = require('mongodb').MongoClient;
// const uri = `mongodb+srv://dbUser:${process.env.mongo_password}@slider.opswz.mongodb.net/booksDB?retryWrites=true&w=majority`;
const uri = `mongodb+srv://dbUser:${process.env.mongo_password}@cluster0.krusy.mongodb.net/booksDB?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology: true, connectTimeoutMS: 30000, keepAlive: 1 });

client.connect()

// const setLeaderboard4 = async (username, score) => {
//   try {
//     // await client.connect();
//     const leaderboard4 = client.db("slider").collection("leaderboard4");
//     await leaderboard4.insertOne( { username: username, score: score } );
//     console.log(`Insterted ${username}'s score of ${score} successfully!`);
//   } catch (err) {
//     console.error(err);
//   } finally {

//   }
// }

const setBooks = async (title, authors, infoLink, imageLink, desc) => {
  try {
    const booksDB = client.db("booksDB").collection("books");
    await booksDB.insertOne( { title: title, authors: authors, infoLink: infoLink, imageLink: imageLink, desc: desc } );
    console.log(`Insterted book successfully!`);
  } catch (err) {
    console.error(err);
  } finally {

  }
}

app.get('/', (req, res) => {
    res.send('hello');
})

// GET BOOKS ROUTE

// const { username, score } = req.body;
//   setLeaderboard3(username, score);
//   res.status(201).json({ success: true });


// POST BOOKS ROUTE
app.post('/api/books', (req, res) => {
  const { title, authors, infoLink, imageLink, desc } = req.body;
  setBooks(title, authors, infoLink, imageLink, desc);
  res.status(201).json({ success: true });
})

// DELTE BOOKS ROUTE

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});