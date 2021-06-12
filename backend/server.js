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

// const getLeaderboard3 = async () => {
//   try {
//     // await client.connect();
//     const leaderboard3 = client.db("slider").collection("leaderboard3");
//     const query = leaderboard3.find({}).sort({ score: 1 }).limit(3);
//     const result = await query.toArray();
//     return result;
//   } catch (err) {
//     console.error(err);
//   } finally {
    
//   }
// }

const getBooks = async () => {
  try {
    const booksDB = client.db("booksDB").collection("books");
    const query = booksDB.find({}).sort({ title: 1 }).limit(10);
    const result = await query.toArray();
    return result;
  } catch (err) {
    console.error(err);
  } finally {
    
  }
}

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

const removeBook = async (bookTitle) => {
  const booksDB = client.db("booksDB").collection("books");
  await booksDB.deleteOne({ title: bookTitle});
}

// GET BOOKS ROUTE
app.get('/api/books', async (req, res) => {
  const result = await getBooks();
  res.send(result);
})

// POST BOOKS ROUTE
app.post('/api/books', (req, res) => {
  const { title, authors, infoLink, imageLink, desc } = req.body;
  setBooks(title, authors, infoLink, imageLink, desc);
  res.status(201).json({ success: true });
})

// DELTE BOOKS ROUTE
app.delete('/api/books/:id', (req, res) => {
  // console.log(req.params.id);
  removeBook(req.params.id);
  res.status(201).json({ success: true });
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});