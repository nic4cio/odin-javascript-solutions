const removeFromArray = function(array, ...args) {
    let mainArrayArguments = array;
    let otherArguments = [...args];

    for(let i = 0; i < otherArguments.length; i++){
        for(let j = 0; j < mainArrayArguments.length; j++){
            if(mainArrayArguments[j] === otherArguments[i]){
                mainArrayArguments.splice(j, 1);
            }
        } 
    }
    return mainArrayArguments;
};

// Do not edit below this line
module.exports = removeFromArray;
