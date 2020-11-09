var express = require('express');
var ejs = require('ejs');
var app = express();
app.set('view engine', 'ejs');
//app.use(express.static('public'));
app.use('/estilos', express.static(__dirname + '/public'));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended:true}));


// Mongodb connection
var conexao = require('mongodb').MongoClient;
//var url = "mongodb://zev01:r4ps4g08@mongodb.zev.news/zev01";
////var url = "mongodb://zev01:zevnews2020@mongodb.zev.news/zev01";
//var database = "zev01";
//var collection1 = "vehicles";
// End of mongodb connection

/*

var url = "mongodb://localhost:27017";
var database = "copia_evdi_kinghost";


/* CONEXAO ALTAS*/
/*var url = "mongodb+srv://zevnews:zevnews2020@zevnewsatlas.sqtdl.mongodb.net/zevnewsatlas?retryWrites=true&w=majority";
var database = "zevnewsatlas";*/

/* CONEXAO UMBLER*/
var url = "mongodb://zevcms:zevnews2020@geonosis.mongodb.umbler.com:37319/mongo_zcms";
var database = "mongo_zcms";

var collection1 = "vehicles";




var cookieSession = require('cookie-session');
app.set('trust proxy', 1) // trust first proxy


var login = "gaspar";
var password = "zevnews2020";

app.use(cookieSession({
  name: 'sessao',
  keys: ['key1', 'key2']
}))



// This checks the server path


var routePath = __dirname;

if (routePath == "/home/zev/apps_nodejs/publisher")
{
  routePath = "/pulisher/"
}

else
{
 routePath = "/pulisher/" 
}




app.get('/', (req, res) => {
  
  res.render(__dirname + "/views/access.ejs");
 
})
app.get("/evdiajax", (req, res) => {
    res.render("evdiajax.ejs");
});



app.get("/servedata", (req, res) => {
    res.send('Este é um teste de Ajax');
});

app.get('/create', function (req, res) {


if (req.session.checado == "ok")
        {
 
    // Create a documento in the "veiculo" collection
    var page = "create_document";
    res.render(__dirname + "/views/structure.ejs", {routePath, page})
  }
  else
  {
    res.redirect('/');
  }
  
});


app.post("/login", function(req, res) { // root route or home route


     login1 = req.param('login');
     password1 =req.param('password');
    

     if (login == login1 && password == password1){
     req.session.checado = "ok";
     
        console.log("login " + login1 + " senha" + password1 )      
         res.redirect('/home')
     }
     else
     {
      console.log("acesso negado");
      res.redirect('/')
     }  
 
     
});

// The Create Route
app.post('/create', function (req, res) {

if (req.session.checado == "ok")
        {

  var photo1 = req.param('photo1');
  var photo2 = req.param('photo2');


  var vtype = req.param('vtype');
  var vclass = req.param('vclass');
  var brand = req.param('brand');
  var model = req.param('model');

  var vversion = req.param('vversion');
  var vyear = req.param('vyear');

  
  var power1 = req.param('power1');
  var power_u = req.param('power_u');

  var torque1 = req.param('torque1');
  var torque_u = req.param('torque_u');

  var axis1 = req.param('axis1');
  var type1 = req.param('type1');

  var power2 = req.param('power2');
  var torque2 = req.param('torque2');
  var axis2 = req.param('axis2');
  var type2 = req.param('type2');

  var power3 = req.param('power3');
  var torque3 = req.param('torque3');
  var axis3 = req.param('axis3');
  var type3 = req.param('type3');

  var power4 = req.param('power4');
  var torque4 = req.param('torque4');
  var axis4 = req.param('axis4');
  var type4 = req.param('type4');

  var power5 = req.param('power5');
  var torque5 = req.param('torque5');
  var axis5 = req.param('axis5');
  var type5 = req.param('type5');

  var power6 = req.param('power6');
  var torque6 = req.param('torque6');
  var axis6 = req.param('axis6');
  var type6 = req.param('type6');
  

  var range = req.param('range');
  var range_u = req.param('range_u');

  var weight = req.param('weight');

  var weight_u = req.param('weight_u');
  
  var height = req.param('height');
  var lenght = req.param('lenght');
  var width = req.param('width');

  var structure = req.param('structure');
  var front_suspension = req.param('front_suspension');
  var rear_suspension = req.param('rear_suspension');
  var front_suspension_travel = req.param('front_suspension_travel');
  var rear_suspension_travel = req.param('rear_suspension_travel');
  
  var camber = req.param('camber');
  var caster = req.param('caster');
  var trail = req.param('trail');
  var rake = req.param('rake');

  var front_brakes = req.param('front_brakes');
  var rear_brakes = req.param('rear_brakes');

  var front_wheels = req.param('front_wheels');
  var rear_wheels = req.param('rear_wheels');

  var front_tyres = req.param('front_tyres');
  var rear_tyres = req.param('rear_tyres');

  var front_gear_box = req.param('front_gear_box');
  var rear_gear_box = req.param('rear_gear_box');
  var final_drive = req.param('final_drive');
  var final_drive_ratio = req.param('final_drive_ratio');

  var capacity = req.param('capacity');
  var super_charging = req.param('super_charging');
  var home_charging = req.param('home_charging');
  var cell_numbers = req.param('cell_numbers');
  var voltage = req.param('voltage');

  var towing = req.param('towing');
  var payload = req.param('payload');
  var approach_angle = req.param('approach_angle');
  var departure_angle = req.param('departure_angle');
  var breakover = req.param('breakover');
  

  var acceleration = req.param('acceleration');
  var speed = req.param('speed');
  var speed_u = req.param('speed_u');

  console.log("Power" + power_u);
 
    // Create a documento in the "veiculo" collection
  conexao.connect(url,{useNewUrlParser: true,useUnifiedTopology: true}, function(err, db) {
      if (err) throw err;
      var dbo = db.db(database);     
      dbo.collection(collection1).insertOne({"vtype":""+ vtype +"","brand":""+ brand +"","vclass":""+ vclass +"","model":""+ model+"",
        "vversion":""+ vversion+"","vyear":""+ vyear +"",
        "photo1":""+ photo1 +"","photo2":""+ photo2 +"",
        "power1":""+ power1+"","torque1":""+ torque1 +"","axis1":""+ axis1 +"","type1":""+ type1 +"",
        "power2":""+ power2+"","torque2":""+ torque2 +"","axis2":""+ axis2 +"","type2":""+ type2 +"",
        "power3":""+ power3+"","torque3":""+ torque3 +"","axis3":""+ axis3 +"","type3":""+ type3 +"",
        "power4":""+ power4+"","torque4":""+ torque4 +"","axis4":""+ axis4 +"","type4":""+ type4 +"",
        "power5":""+ power5+"","torque5":""+ torque5 +"","axis5":""+ axis5 +"","type5":""+ type5 +"",
        "power6":""+ power6+"","torque6":""+ torque6 +"","axis6":""+ axis6 +"","type6":""+ type6 +"",
        "range":""+ range +"","weight":""+ weight +"","weight_u":""+ weight_u +"","power_u":""+ power_u +"","range_u":""+ range_u +"","speed_u":""+ speed_u +"","torque_u":""+ torque_u +"",
        "acceleration":""+ acceleration +"","speed":""+ speed +"","height":""+ height +"","width":""+ width +"","lenght":""+ lenght +"",
        "structure":""+ structure +"", "front_suspension":""+ front_suspension +"", "front_suspension_travel":""+ front_suspension_travel +"", 
        "rear_suspension":""+ rear_suspension +"", "rear_suspension_travel":""+ rear_suspension_travel +"",
        "camber":""+ camber +"", "caster":""+ caster +"", "rake":""+ rake +"", "trail":""+ trail +"",
        "front_tyres":""+ front_tyres +"", "rear_tyres":""+ rear_tyres +"", "front_brakes":""+ front_brakes +"", "rear_brakes":""+ rear_brakes +"",
        "front_wheels":""+ front_wheels +"", "rear_wheels":""+ rear_wheels +"",
        "front_gear_box":""+ front_gear_box +"", "rear_gear_box":""+ rear_gear_box +"","final_drive":""+ final_drive +"","final_drive_ratio":""+ final_drive_ratio +"",
        "capacity":""+ capacity +"","super_charging":""+ super_charging +"", "home_charging":""+ home_charging +"", "cell_numbers":""+ cell_numbers +"", "voltage":""+ voltage +"",
        "towing":""+ towing +"", "payload":""+ payload +"", "approach_angle":""+ approach_angle +"","departure_angle":""+ departure_angle +"", "breakover":""+ breakover +""
      });
    
    });
  // End of Create
      
  res.redirect("/home");
}

else
{
  res.redirect('/');
}

});
// End of Create route





// THE ROUTES FOR CRUD_VERSAO 1 APP


// The starting route
app.get('/documento', function (req, res) {
 
    // Read all the documents in "veiculo" collection
  conexao.connect(url,/*{useNewUrlParser: true,useUnifiedTopology: true},*/ function(err, db) {
      if (err) throw err;
      var resultado;
      var dbo = db.db(database);
      dbo.collection(collection1).find().toArray(function(err, result) {
        if (err) throw err;
        result.forEach(element => {/*console.log("O nome é " + element.brand);*/ });
        var page = "list_documents_test";
        res.render(__dirname + "/views/structure.ejs",{result, routePath, page});
      });
    });
  // End of Read
});
// End of starting route



app.get('/paginateste', (req, res) => {
 // res.send('Hello World!!!')
 //var caminho = __dirname + "/static/css/style.css"
// app.use('/gestaoc/static', express.static('public'));

  res.render (__dirname + "/views/paginateste.ejs" );  
})

// The starting route
app.get('/home', function (req, res) {

  if (req.session.checado == "ok")
        {

 
    // Read all the documents in "veiculo" collection
	conexao.connect(url, /*{useNewUrlParser: true,useUnifiedTopology: true},*/ function(err, db) {
  		if (err) throw err;
  		var resultado;
  		var dbo = db.db(database);
  		dbo.collection(collection1).find().toArray(function(err, result) {
    		if (err) throw err;
        result.forEach(element => {/*console.log("O nome é " + element.brand);*/ });
        var page = "list_documents";
        db.close();
       
    		res.render(__dirname + "/views/structure.ejs",{result, routePath, page});
	    });
  	});
	// End of Read
}
else
{
   res.redirect('/');
}
});
// End of starting route

// The Update Route
app.get('/update/:id', function (req, res) {

  if (req.session.checado == "ok")
        {


  var id = req.params.id;
  console.log(id);
 
    // Find a documento in the vehicles collection

      conexao.connect(url,/*{useNewUrlParser: true,useUnifiedTopology: true},*/ function(err, db) {
      if (err) throw err;
      var dbo = db.db(database);
      var mongodb = require('mongodb');
      
     
      dbo.collection(collection1).find({_id: new mongodb.ObjectID(''+ id +'')}).toArray(function(err, result) {
           result.forEach(element => {
            var page = "update_document";
           res.render(__dirname + "/views/structure.ejs",{result, routePath, page});
            }); 
            db.close();
       });
    });
  // End of Read

        // End of Update
  
  }
  else
  {
     res.redirect('/');
  }
        
      
  
});


app.post('/update', function (req, res) {

   if (req.session.checado == "ok")
        {
  var vtype = req.param('vtype');
  var vclass = req.param('vclass');
  var brand = req.param('brand');
  var model = req.param('model');

  var vversion = req.param('vversion');
  var vyear = req.param('vyear');
  
  var power1 = req.param('power1');
  var power_u = req.param('power_u');

  var torque1 = req.param('torque1');
  var torque_u = req.param('torque_u');

  var axis1 = req.param('axis1');
  var type1 = req.param('type1');

  var power2 = req.param('power2');
  var torque2 = req.param('torque2');
  var axis2 = req.param('axis2');
  var type2 = req.param('type2');

  var power3 = req.param('power3');
  var torque3 = req.param('torque3');
  var axis3 = req.param('axis3');
  var type3 = req.param('type3');

  var power4 = req.param('power4');
  var torque4 = req.param('torque4');
  var axis4 = req.param('axis4');
  var type4 = req.param('type4');

  var power5 = req.param('power5');
  var torque5 = req.param('torque5');
  var axis5 = req.param('axis5');
  var type5 = req.param('type5');

  var power6 = req.param('power6');
  var torque6 = req.param('torque6');
  var axis6 = req.param('axis6');
  var type6 = req.param('type6');
  

  var range = req.param('range');
  var range_u = req.param('range_u');

  var weight = req.param('weight');
  var weight_u = req.param('weight_u');
  var height = req.param('height');
  var lenght = req.param('lenght');
  var width = req.param('width');

  var structure = req.param('structure');
  var front_suspension = req.param('front_suspension');
  var rear_suspension = req.param('rear_suspension');
  var front_suspension_travel = req.param('front_suspension_travel');
  var rear_suspension_travel = req.param('rear_suspension_travel');
  
  var camber = req.param('camber');
  var caster = req.param('caster');
  var trail = req.param('trail');
  var rake = req.param('rake');

  var front_brakes = req.param('front_brakes');
  var rear_brakes = req.param('rear_brakes');

  var front_wheels = req.param('front_wheels');
  var rear_wheels = req.param('rear_wheels');

  var front_tyres = req.param('front_tyres');
  var rear_tyres = req.param('rear_tyres');

  var front_gear_box = req.param('front_gear_box');
  var rear_gear_box = req.param('rear_gear_box');
  var final_drive = req.param('final_drive');
  var final_drive_ratio = req.param('final_drive_ratio');

  var capacity = req.param('capacity');
  var super_charging = req.param('super_charging');
  var home_charging = req.param('home_charging');
  var cell_numbers = req.param('cell_numbers');
  var voltage = req.param('voltage');

  var towing = req.param('towing');
  var payload = req.param('payload');
  var approach_angle = req.param('approach_angle');
  var departure_angle = req.param('departure_angle');
  var breakover = req.param('breakover');
  

  var acceleration = req.param('acceleration');
  var speed = req.param('speed');
  var speed_u = req.param('speed_u');

  var id = req.param('_id');

  console.log("Power" + power_u);

    // Update a documento in the "veiculo" collection
  conexao.connect(url,/*{useNewUrlParser: true,useUnifiedTopology: true},*/ function(err, db) {
  
      if (err) throw err;
      var dbo = db.db(database);
      var mongodb = require('mongodb');
      dbo.collection(collection1).updateOne({_id: new mongodb.ObjectID(''+ id +'')},{$set:{"vtype":""+ vtype +"","brand":""+ brand +"","vclass":""+ vclass +"","model":""+ model+"",
        "vversion":""+ vversion+"","vyear":""+ vyear +"",
        "power1":""+ power1+"","torque1":""+ torque1 +"","axis1":""+ axis1 +"","type1":""+ type1 +"",
        "power2":""+ power2+"","torque2":""+ torque2 +"","axis2":""+ axis2 +"","type2":""+ type2 +"",
        "power3":""+ power3+"","torque3":""+ torque3 +"","axis3":""+ axis3 +"","type3":""+ type3 +"",
        "power4":""+ power4+"","torque4":""+ torque4 +"","axis4":""+ axis4 +"","type4":""+ type4 +"",
        "power5":""+ power5+"","torque5":""+ torque5 +"","axis5":""+ axis5 +"","type5":""+ type5 +"",
        "power6":""+ power6+"","torque6":""+ torque6 +"","axis6":""+ axis6 +"","type6":""+ type6 +"",
        "range":""+ range +"","weight":""+ weight +"","weight_u":""+ weight_u +"","power_u":""+ power_u +"","range_u":""+ range_u +"","speed_u":""+ speed_u +"","torque_u":""+ torque_u +"",
        "acceleration":""+ acceleration +"","speed":""+ speed +"","height":""+ height +"","width":""+ width +"","lenght":""+ lenght +"",
        "structure":""+ structure +"", "front_suspension":""+ front_suspension +"", "front_suspension_travel":""+ front_suspension_travel +"", 
        "rear_suspension":""+ rear_suspension +"", "rear_suspension_travel":""+ rear_suspension_travel +"",
        "camber":""+ camber +"", "caster":""+ caster +"", "rake":""+ rake +"", "trail":""+ trail +"",
        "front_tyres":""+ front_tyres +"", "rear_tyres":""+ rear_tyres +"", "front_brakes":""+ front_brakes +"", "rear_brakes":""+ rear_brakes +"",
        "front_wheels":""+ front_wheels +"", "rear_wheels":""+ rear_wheels +"",
        "front_gear_box":""+ front_gear_box +"", "rear_gear_box":""+ rear_gear_box +"","final_drive":""+ final_drive +"","final_drive_ratio":""+ final_drive_ratio +"",
        "capacity":""+ capacity +"","super_charging":""+ super_charging +"", "home_charging":""+ home_charging +"", "cell_numbers":""+ cell_numbers +"", "voltage":""+ voltage +"",
        "towing":""+ towing +"", "payload":""+ payload +"", "approach_angle":""+ approach_angle +"","departure_angle":""+ departure_angle +"", "breakover":""+ breakover +""
      }});db.close();
      
     
     });
  // End of Update
  res.redirect("/home")
}
else
{
  res.redirect('/');
}
  
});
// End of Update route




// The Remove Route
app.get('/remove/:id', function (req, res) {
  if (req.session.checado == "ok"){

	var id = req.params.id;
  // Remove an item from "veiculo" collection
  conexao.connect(url,/*{useNewUrlParser: true,useUnifiedTopology: true},*/ function(err, db) {
  
  	if (err) throw err;
  	var dbo = db.db(database);
  	// to remove by id, is necessary to create a mongodb ObjjectID
  	var mongodb = require('mongodb')
  		dbo.collection(collection1).deleteOne( {_id: new mongodb.ObjectID(''+ id +'')});
      console.log("documento removido");
  		db.close();
      
      res.redirect("/home");
  	 });
  // The end of Remove item
	}
  else
  {
     res.redirect('/');
  }
});
// The end of Removes Route

app.get('/caminho', function (req, res) {
  var variavel = 1;
  res.render('caminho.ejs', {variavel})

  });


app.get('/zevcms/caminho', function (req, res) {
  var variavel = 2;
  res.render('caminho.ejs', {variavel})

  });


app.get('/apps_nodejs/zevcms/caminho', function (req, res) {
  var variavel = 3;
  res.render('caminho.ejs', {variavel})

  });
app.get('/apps_nodejs/zevcms/views/caminho', function (req, res) {
  var variavel = 4;
  res.render('caminho.ejs', {variavel})

  });




// END OF ROUTES FOR CRUD_VERSAO1



var address,
    ifaces = require('os').networkInterfaces();
for (var dev in ifaces) {
    ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address: undefined);
}

console.log(address)



//Creates Node.JS server
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Servidor CMS - EVDI', port);
});