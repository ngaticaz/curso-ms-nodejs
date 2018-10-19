let dataBases = require("../config/dataBases.js");
let schemas   = require("../config/schemas.js");

let mongoose = require("mongoose");
let Schema   = mongoose.Schema;

let cars_Schema  = new Schema(schemas.carsSchema);

mongoose.connect(dataBases.dbCarsInventory);

let carsCollection  = mongoose.model("cars", cars_Schema);

module.exports._cars_Collection  = carsCollection; 
