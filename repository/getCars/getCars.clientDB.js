//Model: Operation that obtains from DDBB all of c_users 
let message = require("../../config/messages.js").messages.messagesEnglish;

function getCars(){

	let carsCollection   =require("../../util/collections.js")._cars_Collection;
	let promise=new Promise( (resolve,reject)=>{
		
		carsCollection.find({}, (error, cars)=>{
			if (error) {	
				reject(error);			
				return ;
			}
			resolve(cars);  
		});
	});
	return promise ;
}

module.exports.getCars = getCars; 