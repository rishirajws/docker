var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('HC Lab App!..........');
});
app.listen(3033, function () {
  console.log('Example app listening on port 3033!');
});
