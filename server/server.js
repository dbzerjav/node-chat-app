const path = require('path');
const express = require('express');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();


app.get('/', function(req, res) {
    res.sendFile(path.join(publicPath + '/index.html'));
});

app.listen(port, () => {
  console.log(`Started server on port ${port}`);
});
