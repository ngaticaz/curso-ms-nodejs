//Controller: Operation that obtains...
let cars_Collection = require("./insertCar.clientDB");
let message         = require("../../config/messages").messages.messagesEnglish;

async function insertCar(req,res){	
	let mark  = req.body.mark;
	let year  = req.body.year;
	let price = req.body.price;
	
	let promise = cars_Collection.insertCar(mark, year, price);
	
	promise.then(
		(users)=>{
			res.status(200).send({message:message["msgValidRequest"], info:users});
			res.end();
		},
		(error)=>{
			res.status(500).send({message:message["msgDatabaseError"], info:error});
			res.end();
		}
	);
}

module.exports = {
	insertCar
}
