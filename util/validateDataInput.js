function validateOneDigit (data){
    
    let expression = /^\d$/; //Only One Digit
    
    if (data.match(expression)!=null){
        console.log("Valid data type");
        return true;
    }else{
        console.log("Invalid data type");
        return false;
	}
}

function validateOnlyDigits (data){
    
    let expression = /^\d+$/;//Only Digits
                      
    if (data.match(expression)!=null){
        console.log("Valid data type");
        return true;
    }else{
        console.log("Invalid data type");
        return false;
	}
}

function validateBand(data, UpperLimit, LowerLimit){
                    
    if (data>=LowerLimit && data<=UpperLimit ){
        console.log("In range");
        return true;
    }else{
        console.log("Out range");
        return false;
	}
}

function validateCharactersLimit(data, UpperLimit){
    if (data.length<=UpperLimit ){
        console.log("Valid number of characters");
        return true;
    }else{
        console.log("Invalid number of characters");
        return false;
	}
}

module.exports = {
    validateOneDigit,
    validateOnlyDigits,
    validateBand,
    validateCharactersLimit
}