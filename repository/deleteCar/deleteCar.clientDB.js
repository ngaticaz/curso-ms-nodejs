//Model: Operation that obtains...

function deleteCar(idCar_i){

	let carsCollection  = require("../../util/collections.js")._cars_Collection;
	
	let promise=new Promise( (resolve,reject)=>{
		carsCollection.findOneAndDelete({ _id: idCar_i}, (error, car)=>{
			if (error) {	
				reject(error);			
				return ;
			}
			resolve(car);  
		});
	});
	return promise ;
}

module.exports.deleteCar = deleteCar; 