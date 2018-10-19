//Model: Operation that obtains from DDBB all of c_users 
let message = require("../../config/messages.js").messages.messagesEnglish;

function insertCar(mark_i, year_i, price_i){

	let carsCollection  = require("../../util/collections.js")._cars_Collection;
	let car             = new carsCollection({
		mark  :mark_i, 
		year  :year_i, 
		price :price_i,
		visits:"0",
		state :"disponible"
	});
	
	let promise=new Promise( (resolve,reject)=>{
		
		car.save( (error)=>{
			if (error) {	
				reject(error);			
				return ;
			}
			resolve(true);  
		});
	});
	return promise ;
}

module.exports.insertCar = insertCar; 