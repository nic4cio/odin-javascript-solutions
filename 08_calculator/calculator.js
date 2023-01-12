const add = function(...args) {
	let numbers = [...args];
  let additionResult = 0;
  for(let i = 0; i < numbers.length; i++){
    additionResult += numbers[i];
  }

  return additionResult;
};

const subtract = function(...args) {
  let numbers = [...args];
  let subtractionResult = 0;
  for(let i = 0; i < numbers.length; i++){
    if(i == 0){
      subtractionResult = numbers[i];
      //console.log(subtractionResult)
    } else {
      subtractionResult = subtractionResult - numbers[i];
      //console.log(subtractionResult);
    }
  }

  return subtractionResult;
};

const sum = function(arrayOfNumbers) {

  let numbers = arrayOfNumbers;
  let totalSum = 0;

  if(numbers.length == 0){
    return totalSum;
  } else {

    for(let i = 0; i < numbers.length; i++){
      totalSum += numbers[i];
    }
  }
   
  return totalSum;
};

const multiply = function(arrayOfNumbers) {
  let numbers = arrayOfNumbers;
  let totalMultiplication = 1;
  for(let i = 0; i < numbers.length; i++){
    totalMultiplication *= numbers[i];
  }
  return totalMultiplication;
};

const power = function(number, powerNumber) {
  let powerResult = number ** powerNumber;
  return powerResult; 
};

const factorial = function(number) {
  let factorialResult = number;
  if(number == 0 || number == 1){
    factorialResult = 1;
    return factorialResult;
  } else {
    for(let i = number; i > 1; i--){
      factorialResult = factorialResult * (i - 1);
    }
  }

  return factorialResult;
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
