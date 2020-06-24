var express = require('express');

var app = express();

app.get('/', function(req,  res){
 res.send('this is homepage');
});

app.get("/example",function(req,res){
    res.send("this is example api");
    
})

app.listen(3000);
