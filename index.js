var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/dobro/:n', function (req, res) {
    let result = parseInt(req.params.n)*2;
    obj = {'number':req.params.n,"result":result};
    myObj = JSON.stringify(obj);
    res.type("json").send(myObj);
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Example app listening on port 8080!');
});