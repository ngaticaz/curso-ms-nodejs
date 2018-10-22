//Model: Operation that obtains ..
let message = require("../../config/messages.js").messages.messagesEnglish;

function getCarsByMark(carMark_i){

	let carsCollection   =require("../../util/collections.js")._cars_Collection;
	let promise=new Promise( (resolve,reject)=>{
		
		carsCollection.find({mark:carMark_i}, (error, cars)=>{
			if (error) {	
				reject(error);			
				return ;
			}
			resolve(cars);  
		});
	});
	return promise ;
}

function increaseVisits(idCar, visitsCar){
	
	let carsCollection   = require("../../util/collections.js")._cars_Collection;
	let promise=new Promise( (resolve,reject)=>{
		
		carsCollection.update( {_id:idCar}, {$set:{visits:visitsCar+1}} , ( error )=> {
			if (error) {	
				reject(error);			
				return ;
			}
			resolve(true);  
		});
	});
	return promise ;
}

module.exports.getCarsByMark  = getCarsByMark; 
module.exports.increaseVisits = increaseVisits; 