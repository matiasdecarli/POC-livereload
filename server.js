var port = process.env.PORT || 5000;
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
  console.log('listening on *: ',port);
});
