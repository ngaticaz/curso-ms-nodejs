//Model: Operation that obtains...

function updatePrice(idCar_i, newPrice_i){

	let carsCollection  = require("../../util/collections.js")._cars_Collection;
	
	let promise=new Promise( (resolve,reject)=>{
		
		carsCollection.updateOne({ _id: idCar_i}, {$set:{price:newPrice_i}} , ( error, car )=> {
			if (error) {	
				reject(error);			
				return ;
			}
			resolve(car);  
		});
	});
	return promise ;
}

module.exports.updatePrice = updatePrice; 