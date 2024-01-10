const convertToCelsius = function(farenheit) {
  // Farenheit to Celsius: x °F ≘ (x − 32) × 5/9 °C
  const celsius = (farenheit - 32) * 5 / 9;

  // Round to 1 decimal place
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  // Celsius to Farenheit: x °C ≘ (x × 9/5 + 32) °F
  const farenheit = (celsius * 9 / 5 + 32)

  // Round to 1 decimal place
  return Math.round(farenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
