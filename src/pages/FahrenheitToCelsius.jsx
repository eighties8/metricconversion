import { useState } from 'react';
import Converter from '../components/Converter';

const CelsiusToFahrenheit = () => {
  const [activeUnit, setActiveUnit] = useState('fahrenheit'); // 'fahrenheit', 'celsius', 'kelvin'

  // Fahrenheit to Celsius: °C = (°F - 32) × 5/9
  const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * (5/9);
  
  // Celsius to Fahrenheit: °F = (°C × 9/5) + 32
  const celsiusToFahrenheit = (celsius) => (celsius * (9/5)) + 32;

  // Fahrenheit to Kelvin: K = (°F - 32) × 5/9 + 273.15
  const fahrenheitToKelvin = (fahrenheit) => (fahrenheit - 32) * (5/9) + 273.15;
  
  // Kelvin to Fahrenheit: °F = (K - 273.15) × 9/5 + 32
  const kelvinToFahrenheit = (kelvin) => (kelvin - 273.15) * (9/5) + 32;

  // Celsius to Kelvin: K = °C + 273.15
  const celsiusToKelvin = (celsius) => celsius + 273.15;
  
  // Kelvin to Celsius: °C = K - 273.15
  const kelvinToCelsius = (kelvin) => kelvin - 273.15;

  const getConversionFunctions = () => {
    switch (activeUnit) {
      case 'fahrenheit':
        return {
          unit1: '°F',
          unit2: '°C',
          unit1Label: 'Fahrenheit (°F)',
          unit2Label: 'Celsius (°C)',
          customConversion1to2: fahrenheitToCelsius,
          customConversion2to1: celsiusToFahrenheit
        };
      case 'celsius':
        return {
          unit1: '°C',
          unit2: '°F',
          unit1Label: 'Celsius (°C)',
          unit2Label: 'Fahrenheit (°F)',
          customConversion1to2: celsiusToFahrenheit,
          customConversion2to1: fahrenheitToCelsius
        };
      case 'kelvin':
        return {
          unit1: 'K',
          unit2: '°F',
          unit1Label: 'Kelvin (K)',
          unit2Label: 'Fahrenheit (°F)',
          customConversion1to2: kelvinToFahrenheit,
          customConversion2to1: fahrenheitToKelvin
        };
      default:
        return {
          unit1: '°F',
          unit2: '°C',
          unit1Label: 'Fahrenheit (°F)',
          unit2Label: 'Celsius (°C)',
          customConversion1to2: fahrenheitToCelsius,
          customConversion2to1: celsiusToFahrenheit
        };
    }
  };

  const conversionConfig = getConversionFunctions();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
          <span className="text-[#333] dark:text-[#60a5fa]">Temperature Converter</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          Convert between Fahrenheit, Celsius, and Kelvin instantly
        </p>
        
        {/* Unit Selection Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveUnit('fahrenheit')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeUnit === 'fahrenheit'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Fahrenheit (°F)
          </button>
          <button
            onClick={() => setActiveUnit('celsius')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeUnit === 'celsius'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Celsius (°C)
          </button>
          <button
            onClick={() => setActiveUnit('kelvin')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeUnit === 'kelvin'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Kelvin (K)
          </button>
        </div>
      </div>

      <Converter
        title=""
        description=""
        {...conversionConfig}
      />
    </div>
  );
};

export default CelsiusToFahrenheit; 