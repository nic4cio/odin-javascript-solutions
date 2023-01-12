const sumAll = function(firstNumber, lastNumber) {
    let result = 0;

    if(firstNumber < 0 ||
        lastNumber < 0 || 
        typeof firstNumber !== "number" || 
        typeof lastNumber !== "number")
    {
        return 'ERROR';
    }
    
    else if(firstNumber > lastNumber){
        for(let i = firstNumber; i >= lastNumber; i--){
            result += i;
        }
    } 
    else {
        for(let i = firstNumber; i <= lastNumber; i++){
            result += i;
        }
    }

    return result;
};


//console.log(sumAll(10, 1));

// Do not edit below this line
module.exports = sumAll;
