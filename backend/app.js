const express = require('express');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://MatthewCPointer:ru6OtHyBDq8u9CXX@mean-cluster.9glg3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(() => {
  console.log("Connected to database");
})
.catch((reason) => {
  console.log("Connection failed. Error: " + reason);
})

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, OPTIONS");
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    postDetails: req.body.postDetails
  });
  console.log(post);
  res.status(201).json({
    message: "Post added successfully"
  }
  );
});

app.get('/api/posts' ,(req, res, next) => {
  const posts = [
    {
      id: 'asdfasd123',
      title: 'This is our first server-side post',
      postDetails: 'This is data coming from the node server'
    },
    {
      id: 'asdfasd132',
      title: 'This is our second server-side post',
      postDetails: 'This is data coming from the node server'
    }
  ];
  res.status(200).json({
    msg: 'Posts Fetch Success',
    posts: posts
  });
});

module.exports = app;
