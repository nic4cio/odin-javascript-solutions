const reverseString = function(string) {
    let result = '';
    for (let counter = string.length - 1; counter >= 0; counter--){
        result += string[counter];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
