var express = require('express');
var app = express();


//Reusable controllers
var customerController=function (req, res) {
  console.log("CAlling rest api");
  var customers=[
            {firstName:'Dipesh',lastName:'Mundra',contact:9898985756},
            {firstName:'King',lastName:'Patel',contact:9898985757},
            {firstName:'Rohit',lastName:'Rathi',contact:9898985858},
			 {firstName:'Queem',lastName:'Patel',contact:9898985757},
            {firstName:'rakesh',lastName:'Rathi',contact:9898985858},
      ];
  res.send(customers);
};

// setting router to map requests  with controllers

app.get('/customers',customerController );

var server = app.listen(8089, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("server is listening at 8089", host, port)
})