//Controller: Operation that obtains...
let cars_Collection = require("./getCarsByMark.clientDB");
let message            = require("../../config/messages").messages.messagesEnglish;

async function getCarsByMark(req,res){	
	
	let carMark = req.params.mark;
	let cars = await cars_Collection.getCarsByMark(carMark);
	
		if ( cars!=null ){
			
			for(let i=0;i<cars.length;i++){
				let idCar     = cars[i]._id; //console.log( idCar ); 
				let visitsCar = cars[i].visits; //console.log( visitsCar ); 

				if ( (visitsCar%10)==0 ){//console.log("OK-OK");
					let mark  = cars[i].mark;
					let year  = cars[i].year;
					let price = cars[i].price - (cars[i].price)*0.1;
					let state = cars[i].state;

					let carsJson={
						  _id    : idCar,
						  mark   : mark, 
						  year   : year,
						  price  : price,
						  visits : visitsCar,
						  state  : state	  
						};

					cars=carsJson;
					break;
				}

				let visits = await cars_Collection.increaseVisits( idCar, visitsCar );
				console.log(visits);	
			}
			
			res.status(200).send({message:message["msgValidRequest"], info:cars});
			res.end();

		}else{

			res.status(500).send({message:message["msgDatabaseError"], info:error});
			res.end();
		}
}

module.exports = {
	getCarsByMark
}
