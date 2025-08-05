import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Converter from '../components/Converter';

const KgToLbs = () => {
  const [activeUnit, setActiveUnit] = useState('kg'); // 'kg', 'lbs', 'g', 'oz', 'stone'

  // Conversion rates from HomePage
  const conversionRates = {
    'kg-lbs': 2.20462,
    'kg-g': 1000,
    'kg-oz': 35.274,
    'kg-stone': 0.157473,
    'lbs-kg': 0.453592,
    'lbs-g': 453.592,
    'lbs-oz': 16,
    'lbs-stone': 0.0714286,
    'g-kg': 0.001,
    'g-lbs': 0.00220462,
    'g-oz': 0.035274,
    'oz-kg': 0.0283495,
    'oz-lbs': 0.0625,
    'oz-g': 28.3495,
    'stone-kg': 6.35029,
    'stone-lbs': 14,
    'stone-g': 6350.29,
    'stone-oz': 224,
  };

  const getConversionFunctions = () => {
    switch (activeUnit) {
      case 'kg':
        return {
          unit1: 'kg',
          unit2: 'lbs',
          unit1Label: 'Kilograms (kg)',
          unit2Label: 'Pounds (lbs)',
          conversionRate: conversionRates['kg-lbs'],
          reverseConversionRate: conversionRates['lbs-kg']
        };
      case 'lbs':
        return {
          unit1: 'lbs',
          unit2: 'kg',
          unit1Label: 'Pounds (lbs)',
          unit2Label: 'Kilograms (kg)',
          conversionRate: conversionRates['lbs-kg'],
          reverseConversionRate: conversionRates['kg-lbs']
        };
      case 'g':
        return {
          unit1: 'g',
          unit2: 'oz',
          unit1Label: 'Grams (g)',
          unit2Label: 'Ounces (oz)',
          conversionRate: conversionRates['g-oz'],
          reverseConversionRate: conversionRates['oz-g']
        };
      case 'oz':
        return {
          unit1: 'oz',
          unit2: 'g',
          unit1Label: 'Ounces (oz)',
          unit2Label: 'Grams (g)',
          conversionRate: conversionRates['oz-g'],
          reverseConversionRate: conversionRates['g-oz']
        };
      case 'stone':
        return {
          unit1: 'stone',
          unit2: 'kg',
          unit1Label: 'Stone (st)',
          unit2Label: 'Kilograms (kg)',
          conversionRate: conversionRates['stone-kg'],
          reverseConversionRate: conversionRates['kg-stone']
        };
      default:
        return {
          unit1: 'kg',
          unit2: 'lbs',
          unit1Label: 'Kilograms (kg)',
          unit2Label: 'Pounds (lbs)',
          conversionRate: conversionRates['kg-lbs'],
          reverseConversionRate: conversionRates['lbs-kg']
        };
    }
  };

  const conversionConfig = getConversionFunctions();

  return (
    <>
      <Helmet>
        <title>Weight Converter - Convert kg, lbs, g, oz, stone | MetricConversion.app</title>
        <meta name="description" content="Free online weight converter. Convert between kilograms, pounds, grams, ounces, and stone instantly with our accurate conversion calculator." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            <span className="text-[#333] dark:text-[#60a5fa]">Weight Converter</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Convert between kilograms, pounds, grams, ounces, and stone instantly
          </p>
          
          {/* Unit Selection Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveUnit('kg')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeUnit === 'kg'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Kilograms (kg)
            </button>
            <button
              onClick={() => setActiveUnit('lbs')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeUnit === 'lbs'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Pounds (lbs)
            </button>
            <button
              onClick={() => setActiveUnit('g')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeUnit === 'g'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Grams (g)
            </button>
            <button
              onClick={() => setActiveUnit('oz')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeUnit === 'oz'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Ounces (oz)
            </button>
            <button
              onClick={() => setActiveUnit('stone')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeUnit === 'stone'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Stone (st)
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

export default KgToLbs; 