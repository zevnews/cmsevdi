db.getCollection("vehicles").find({})

db.vehicles.find();

db.vehicles.insert({"vehicle":
	{
		"vehicle_type":"car",
		"vehicle_class":"suv",
		"vehicle_brand":"Tesla",
		"vehicle_model":"Model 3",
		"vehicle_version":"Super",
		"vehicle_year":"2017"
	},
"powertrain":
	{
		"motor_1":
			{
				"motor_axis":"front",
				"motor_type":"magnetic permanent",
				"motor_power":"100",
				"motor_torque":"200",
				"power_unit":"Kw",
				"torque_unit":"Nm"
			},
			"motor_2":
			{
				"motor_axis":"front",
				"motor_type":"magnetic permanent",
				"motor_power":"100",
				"motor_torque":"200",
				"power_unit":"Kw",
				"torque_unit":"Nm"
			}
	}



});



db.vehicles.find( { "vehicle": {"vehicle_type":"car",
		"vehicle_class":"suv",
		"vehicle_brand":"Tesla",
		"vehicle_model":"Model X",
		"vehicle_version":"Super",
		"vehicle_year":"2017"} } );
		

		
		 /**/

	var x = 1;
	
	while (x < 10)
	{
	    print("numero" + x);
	    x++;
	
	}
	
db.vehicles.find();



db.testesdocumentos.insert({"titulo": "titulo 1", "numero": 1});

db.testesdocumentos.find();

db.testesdocumentos.find({"numero":{$gte:10}});

db.testesdocumentos.find({$and: [{"numero":{$gte:10}},{"titulo":"titulo12"}]});

teste = db.testesdocumentos.find();

teste = db.testesdocumentos;

teste.find();



teste.forEach(imprimir);

var estudo = new Array();

estudo = [1,2,3,4,5,6];

estudo = db.vehicles.find().toArray();

//estudo = db.testesdocumentos.find().toArray();

function imprimir(vehicle) {
        print(vehicle.brand);
        //print(vehicle.vehicle_type)
   
}

//Por que callback é necessário?
estudo.forEach(imprimir);

