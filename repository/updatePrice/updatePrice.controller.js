//Controller: Operation that obtains...
let cars_Collection = require("./updatePrice.clientDB");
let message         = require("../../config/messages").messages.messagesEnglish;

async function updatePrice(req,res){	
	let idCar  = req.body.id;
	let newPrice  = req.body.newprice;
	
	let promise = cars_Collection.updatePrice(idCar, newPrice);
	
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
	updatePrice
}
