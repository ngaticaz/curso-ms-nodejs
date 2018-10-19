let express     = require("express");		  
let bodyParser  = require("body-parser");   
let app         = express();
var cors        = require('cors')			           

let getCars        = require('../repository/getCars/getCars.controller');//
let getCarsByMark  = require('../repository/getCarsByMark/getCarsByMark.controller');//

let insertCar      = require('../repository/insertCar/insertCar.controller');//

app.use(bodyParser.json());                      
app.use(bodyParser.urlencoded({extended:true})); 
app.use(cors())

app.get    ("/getCars"                , getCars.getCars);
app.get    ("/getcarsbymark/:mark"    , getCarsByMark.getCarsByMark);

app.post   ("/insertcar"              , insertCar.insertCar);

module.exports.routes=app;
