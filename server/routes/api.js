console.log("api running away");

var cors = require('cors');
const express = require('express');
const router = express.Router();

// declare axios for making http requests
// const axios = require('axios');
// const API = 'https://jsonplaceholder.typicode.com';

const app = express();
const axios = require('axios');
app.use(cors());

const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://batteries76:chewugin2@ds119020.mlab.com:19020/language-tree', (err, database) => {
  if (err) return console.log(err);
  db = database;
})

/* GET api listing. */
router.get('/', (req, res) => {
  console.log("in the api get at /");
  res.send('api works!!!');
});

// Get all posts
router.get('/country-info', (req, res) => {
  console.log("API COUNTRY Info!");
  db.collection('country-info').find().toArray((err, results) => {
//    console.log(results);
    res.send(results);
  });
});

router.get('/final-language-tree', (req, res) => {
  console.log("API LANGUAGES!");
  db.collection('final-language-tree').find().toArray((err, results) => {
//    console.log(results);
    res.send(results);
  });
});

router.get('/country-geo', (req, res) => {
  console.log("API COUNTRY geo!");
  console.log(req.query);
  db.collection('country-geo').find({features: {$elemMatch: { "properties": req.query }}}).toArray((err, results) => {
//    console.log(results);
    res.send(results);
  });
});

router.get('/country-geo/:cca2', (req, res) => {
  console.log("API COUNTRY geo (with params)!");
  console.log(req.params);
  console.log(req.params.cca2);
});

module.exports = router;
