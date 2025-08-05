import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Converter from '../components/Converter';

const LitersToGallons = () => {
  const [activeUnit, setActiveUnit] = useState('L'); // 'L', 'gal', 'ml', 'floz'

  // Conversion rates from HomePage
  const conversionRates = {
    'l-gal': 0.264172,
    'l-ml': 1000,
    'l-floz': 33.814,
    'gal-l': 3.78541,
    'gal-ml': 3785.41,
    'gal-floz': 128,
    'ml-l': 0.001,
    'ml-gal': 0.000264172,
    'ml-floz': 0.033814,
    'floz-l': 0.0295735,
    'floz-gal': 0.0078125,
    'floz-ml': 29.5735,
  };

  const getConversionFunctions = () => {
    switch (activeUnit) {
      case 'L':
        return {
          unit1: 'L',
          unit2: 'gal',
          unit1Label: 'Liters (L)',
          unit2Label: 'Gallons (gal)',
          conversionRate: conversionRates['l-gal'],
          reverseConversionRate: conversionRates['gal-l']
        };
      case 'gal':
        return {
          unit1: 'gal',
          unit2: 'L',
          unit1Label: 'Gallons (gal)',
          unit2Label: 'Liters (L)',
          conversionRate: conversionRates['gal-l'],
          reverseConversionRate: conversionRates['l-gal']
        };
      case 'ml':
        return {
          unit1: 'ml',
          unit2: 'floz',
          unit1Label: 'Milliliters (ml)',
          unit2Label: 'Fluid Ounces (fl oz)',
          conversionRate: conversionRates['ml-floz'],
          reverseConversionRate: conversionRates['floz-ml']
        };
      case 'floz':
        return {
          unit1: 'floz',
          unit2: 'ml',
          unit1Label: 'Fluid Ounces (fl oz)',
          unit2Label: 'Milliliters (ml)',
          conversionRate: conversionRates['floz-ml'],
          reverseConversionRate: conversionRates['ml-floz']
        };
      default:
        return {
          unit1: 'L',
          unit2: 'gal',
          unit1Label: 'Liters (L)',
          unit2Label: 'Gallons (gal)',
          conversionRate: conversionRates['l-gal'],
          reverseConversionRate: conversionRates['gal-l']
        };
    }
  };

  const conversionConfig = getConversionFunctions();

  return (
    <>
      <Helmet>
        <title>Volume Converter - Convert L, gal, ml, fl oz | MetricConversion.app</title>
        <meta name="description" content="Free online volume converter. Convert between liters, gallons, milliliters, and fluid ounces instantly with our accurate conversion calculator." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            <span className="text-[#333] dark:text-[#60a5fa]">Volume Converter</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Convert between liters, gallons, milliliters, and fluid ounces instantly
          </p>
          
          {/* Unit Selection Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveUnit('L')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeUnit === 'L'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Liters (L)
            </button>
            <button
              onClick={() => setActiveUnit('gal')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeUnit === 'gal'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Gallons (gal)
            </button>
            <button
              onClick={() => setActiveUnit('ml')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeUnit === 'ml'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Milliliters (ml)
            </button>
            <button
              onClick={() => setActiveUnit('floz')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeUnit === 'floz'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Fluid Ounces (fl oz)
            </button>
          </div>
        </div>

        <Converter
          title=""
          description=""
          {...conversionConfig}
        />
      </div>
    </>
  );
};

export default LitersToGallons; 