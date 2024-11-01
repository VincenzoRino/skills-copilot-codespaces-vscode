//Create a web server
const express = require('express');
const app = express();
const port = 3000;

//Create a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

//Create a route for the /comments path
app.get('/comments', (req, res) => {
  res.send('This is a route for /comments');
});

//Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});