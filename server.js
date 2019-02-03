let express = require('express');
let mongoose = require('mongoose');

let bodyParser = require('body-parser');

let port= process.env.PORT||1010;
let app=express();


let apiRoutes = require("./api/api-routes/esgDetailsRoutes.js");
var url = "mongodb://test-mongo-db:1PDx6SLX72MxCgN4CO6HS6WbpiKXjs4kj7hkXVMYP6oTHvSIzmJLsWxw6BGn83cRkU6LsxdiVf94Tq67Q4FAHA%3D%3D@test-mongo-db.documents.azure.com:10255/esg_db?ssl=true";

//bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Connect to mongoDb
mongoose.connect(url);
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('connected');
});
app.get('/', (req, res) => res.send('Please use context paths to hit respective api(s).'));

//Use Api routes
app.use('/apis/v1.0/stateless/esg', apiRoutes);
process.on('uncaughtException', function (err) {
    console.error(err);
});
app.listen(port,function(){
	console.log("esg app api server started on port: " + port);	
});
