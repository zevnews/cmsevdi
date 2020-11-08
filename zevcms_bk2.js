var express = require('express');
var ejs = require('ejs');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());


// Mongodb connection
var conexao = require('mongodb').MongoClient;
var url = "mongodb://zev01:r4ps4g08@mongodb.zev.news/zev01";
//var url = "mongodb://zev01:zevnews2020@mongodb.zev.news/zev01";
var database = "zev01";
var collection1 = "vehicles";
// End of mongodb connection


// This checks the server path


var routePath = __dirname;

console.log("Caminho novo-> " + routePath);



// END OF ROUTES FOR CRUD_VERSAO1


//Creates Node.JS server
var server = app.listen(21111, function () {
    console.log('Servidor node em operação');
});