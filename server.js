let express = require('express');
let cors = require('cors');
let mongoose = require('mongoose').set("debug",true);

let bodyParser = require('body-parser');

let port= process.env.PORT||2020;
let app=express();


let apiRoutes = require("./api/api-routes/api-routing.js");
var url = "mongodb://test-mongo-db:1PDx6SLX72MxCgN4CO6HS6WbpiKXjs4kj7hkXVMYP6oTHvSIzmJLsWxw6BGn83cRkU6LsxdiVf94Tq67Q4FAHA%3D%3D@test-mongo-db.documents.azure.com:10255/esg_db?ssl=true";

app.use(cors());
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
app.use('/apis/v1.0/stateless', apiRoutes);
process.on('uncaughtException', function (err) {
    console.error(err);
});
app.listen(port,function(){
	console.log("esg app api server started on port: " + port);	
});
