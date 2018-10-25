//Model: Operation that obtains ...

let getCars = async()=>{

	let carsCollection = require("../../util/collections.js")._cars_Collection;
 
	let requestDB = await carsCollection.find({}, (error, cars)=>{
		if(error){
			return error;
		} return cars;
	});
 
	return requestDB;
}

module.exports.getCars = getCars; 

/*
let getCars = async()=>{

	let carsCollection = require("../../util/collections.js")._cars_Collection;
 
	let requestDB = await carsCollection.find({}, (error, cars)=>{
 
	});
 
	return requestDB;
}
*/
