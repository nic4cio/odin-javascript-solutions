const convertToCelsius = function(temperature) {
  let fahrenheitTemperature = temperature;
  let newCelsiusTemperature = 0;
  newCelsiusTemperature = ((fahrenheitTemperature - 32) * 5) / 9;
  if(newCelsiusTemperature == 0) {
    return newCelsiusTemperature;
  } else {
    newCelsiusTemperature = Number(newCelsiusTemperature.toFixed(1));
    return newCelsiusTemperature;
  }
};

const convertToFahrenheit = function(temperature) {
  let celsiusTemperature = temperature;
  let newFahrenheitTemperature = 0;
  newFahrenheitTemperature = ((9 / 5) * celsiusTemperature) + 32;
  
  if(newFahrenheitTemperature == 0) {
    return newFahrenheitTemperature;
  } else {
    newFahrenheitTemperature = Number(newFahrenheitTemperature.toFixed(1));
    return newFahrenheitTemperature;
  }
};

//console.log();

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
