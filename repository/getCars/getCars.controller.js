//Controller: Operation that obtains...
let cars_Collection = require("./getCars.clientDB");
let message            = require("../../config/messages").messages.messagesEnglish;

async function getCars(req,res){	
	
	let promise = cars_Collection.getCars();
	
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
	getCars
}
