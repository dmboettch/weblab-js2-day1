var express = require('express');
var app = express();
var ejs = require('ejs');

app.set('views engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index',{
        data: properties,
        pagTitle: "Properties Index!"
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

var properties = [
    {
        ownerName: "Deanne Boettcher",
        address: "123 Main Street"
    },
    {
        ownerName: "Chris Boettcher",
        address: "345 Dodge Ln."
    },
    {
        ownerName: "Natasha Boettcher",
        address: "567 Home"
    }
];


console.log(properties);

