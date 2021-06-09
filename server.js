const express = require('express');
const app = new express();
const path = require("path");

const hostname = '127.0.0.1';
const port = 3000;

app.use('/static', express.static('public'));

app.get('/', function(request, response){
  response.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
