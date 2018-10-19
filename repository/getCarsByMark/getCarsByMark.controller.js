//Controller: Operation that obtains...
let cars_Collection = require("./getCarsByMark.clientDB");
let message            = require("../../config/messages").messages.messagesEnglish;

async function getCarsByMark(req,res){	
	
	let carMark = req.params.mark;
	let promise = cars_Collection.getCarsByMark(carMark);
	
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
	getCarsByMark
}
