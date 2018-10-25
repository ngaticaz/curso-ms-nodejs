//Controller: Operation that obtains...
let cars_Collection = require("./getCars.clientDB");
let message            = require("../../config/messages").messages.messagesEnglish;

async function getCars(req,res){	
	
	let promise = await cars_Collection.getCars();
	if (promise[0]._id){
		res.status(200).send({message:message["msgValidRequest"], info:promise});
		res.end();
	}else{
		res.status(500).send({message:message["msgDatabaseError"], info:promise});
		res.end();
	}
}

module.exports = {
	getCars
}
