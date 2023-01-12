const palindromes = function (string) {
    let desiredString = '';
    for(let i = string.length - 1; i >= 0; i--){
        desiredString = desiredString + string[i];
        console.log(desiredString);
    }

    if(string.toUpperCase() === desiredString.toUpperCase()){
        return true;
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
