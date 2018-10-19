//Controller: Operation that obtains...
let cars_Collection = require("./deleteCar.clientDB");
let message         = require("../../config/messages").messages.messagesEnglish;

async function deleteCar(req,res){	
	let idCar  = req.body.id;
	
	let promise = cars_Collection.deleteCar(idCar);
	
	promise.then(
		(car)=>{
			res.status(200).send({message:message["msgValidRequest"], info:car});
			res.end();
		},
		(error)=>{
			res.status(500).send({message:message["msgDatabaseError"], info:error});
			res.end();
		}
	);
}

module.exports = {
	deleteCar
}
