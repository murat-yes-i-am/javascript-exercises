const roundToOneDecimal = (num) => Math.round(num * 10) / 10;

const convertToCelsius = function(temperature) {
  return (temperature - 32) * 5 / 9;
};

const convertToFahrenheit = function(temperature) {
  return temperature * 9 / 5 + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
