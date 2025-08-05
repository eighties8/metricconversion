import Converter from '../components/Converter';

const CelsiusToFahrenheit = () => {
  // Fahrenheit to Celsius: °C = (°F - 32) × 5/9
  const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * (5/9);
  
  // Celsius to Fahrenheit: °F = (°C × 9/5) + 32
  const celsiusToFahrenheit = (celsius) => (celsius * (9/5)) + 32;

  return (
    <Converter
      title="Fahrenheit to Celsius Converter"
      description="Convert between Fahrenheit and Celsius instantly. Use the formula: °C = (°F - 32) × 5/9"
      unit1="°F"
      unit2="°C"
      unit1Label="Fahrenheit (°F)"
      unit2Label="Celsius (°C)"
      customConversion1to2={fahrenheitToCelsius}
      customConversion2to1={celsiusToFahrenheit}
    />
  );
};

export default CelsiusToFahrenheit; 