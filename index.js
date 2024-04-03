require('dotenv').config()
const express = require('express')
const app = express()



app.get('/', function(req, res) {
  let arr = [{
    "name": "mohammed farooq",
    "age":20
  },{ "name": "rehan khan",
  "age":50}]
  res.send(arr);
});
app.get('/twitter', function(req, res) {
    res.send("<h1>Hello I am H1</h1>")
    console.log(req);
  });
//this is listening
app.listen(process.env.PORT, function() {
  console.log('Example app listening on port ' + process.env.PORT);
});
