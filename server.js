//jshint esversion:6
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;
const urlStatusCode = require('url-status-code');
const url = 'https://www.';



app.get('/I/want/title/', (req, res) => {
  var id = req.query.address;

  if (id[0] == 'h' && id[1] == 't' && id[2] == 't' && id[3] == 'p') {
    urlStatusCode(id, (error, statusCode) => {
      if (error) {
        console.error(error);
        res.send(id + "- NO RESPONSE");
      } else {
        console.log(statusCode);
        res.send("address :" + id);
      }
    });
  } else if (id[0] == 'w' && id[1] == 'w' && id[2] == 'w' && id[3] == '.') {
    urlStatusCode('http://' + id, (error, statusCode) => {
      if (error) {
        console.error(error);
        res.send(id + "- NO RESPONSE");
      } else {
        console.log(statusCode);
        res.send("address :" + id);
      }
    });
  } else {
    urlStatusCode(url + id, (error, statusCode) => {
      if (error) {
        console.error(error);
        res.send(id + "- NO RESPONSE");
      } else {
        console.log(statusCode);
        res.send("address :" + id);
      }
    });
  }




  //  res.sendFile(__dirname+ "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


app.use(function(req, res) {
  res.send("ERROR 404 - NOT FOUND");
});
