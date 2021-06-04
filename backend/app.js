const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, OPTIONS");
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
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
