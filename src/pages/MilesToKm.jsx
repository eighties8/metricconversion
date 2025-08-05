import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Converter from '../components/Converter';

const MilesToKm = () => {
  const [activeUnit, setActiveUnit] = useState('mi'); // 'm', 'ft', 'cm', 'in', 'mm', 'km', 'mi'

  // Conversion rates from HomePage
  const conversionRates = {
    'm-ft': 3.28084,
    'm-cm': 100,
    'm-in': 39.3701,
    'm-km': 0.001,
    'm-mi': 0.000621371,
    'ft-m': 0.3048,
    'ft-cm': 30.48,
    'ft-in': 12,
    'ft-km': 0.0003048,
    'ft-mi': 0.000189394,
    'cm-m': 0.01,
    'cm-ft': 0.0328084,
    'cm-in': 0.393701,
    'cm-km': 0.00001,
    'cm-mi': 0.00000621371,
    'in-m': 0.0254,
    'in-ft': 0.0833333,
    'in-cm': 2.54,
    'in-km': 0.0000254,
    'in-mi': 0.0000157828,
    'km-m': 1000,
    'km-ft': 3280.84,
    'km-cm': 100000,
    'km-in': 39370.1,
    'km-mi': 0.621371,
    'mi-m': 1609.34,
    'mi-ft': 5280,
    'mi-cm': 160934,
    'mi-in': 63360,
    'mi-km': 1.60934,
    // Millimeter conversions
    'mm-m': 0.001,
    'mm-cm': 0.1,
    'mm-in': 0.0393701,
    'mm-ft': 0.00328084,
    'mm-km': 0.000001,
    'mm-mi': 0.000000621371,
    'm-mm': 1000,
    'cm-mm': 10,
    'in-mm': 25.4,
    'ft-mm': 304.8,
    'km-mm': 1000000,
    'mi-mm': 1609340,
  };

  const getConversionFunctions = () => {
    switch (activeUnit) {
      case 'm':
        return {
          unit1: 'm',
          unit2: 'ft',
          unit1Label: 'Meters (m)',
          unit2Label: 'Feet (ft)',
          conversionRate: conversionRates['m-ft'],
          reverseConversionRate: conversionRates['ft-m']
        };
      case 'ft':
        return {
          unit1: 'ft',
          unit2: 'm',
          unit1Label: 'Feet (ft)',
          unit2Label: 'Meters (m)',
          conversionRate: conversionRates['ft-m'],
          reverseConversionRate: conversionRates['m-ft']
        };
      case 'cm':
        return {
          unit1: 'cm',
          unit2: 'in',
          unit1Label: 'Centimeters (cm)',
          unit2Label: 'Inches (in)',
          conversionRate: conversionRates['cm-in'],
          reverseConversionRate: conversionRates['in-cm']
        };
      case 'in':
        return {
          unit1: 'in',
          unit2: 'cm',
          unit1Label: 'Inches (in)',
          unit2Label: 'Centimeters (cm)',
          conversionRate: conversionRates['in-cm'],
          reverseConversionRate: conversionRates['cm-in']
        };
      case 'mm':
        return {
          unit1: 'mm',
          unit2: 'in',
          unit1Label: 'Millimeters (mm)',
          unit2Label: 'Inches (in)',
          conversionRate: conversionRates['mm-in'],
          reverseConversionRate: conversionRates['in-mm']
        };
      case 'km':
        return {
          unit1: 'km',
          unit2: 'mi',
          unit1Label: 'Kilometers (km)',
          unit2Label: 'Miles (mi)',
          conversionRate: conversionRates['km-mi'],
          reverseConversionRate: conversionRates['mi-km']
        };
      case 'mi':
        return {
          unit1: 'mi',
          unit2: 'km',
          unit1Label: 'Miles (mi)',
          unit2Label: 'Kilometers (km)',
          conversionRate: conversionRates['mi-km'],
          reverseConversionRate: conversionRates['km-mi']
        };
      default:
        return {
          unit1: 'mi',
          unit2: 'km',
          unit1Label: 'Miles (mi)',
          unit2Label: 'Kilometers (km)',
          conversionRate: conversionRates['mi-km'],
          reverseConversionRate: conversionRates['km-mi']
        };
    }
  };

  const conversionConfig = getConversionFunctions();

  return (
    <>
      <Helmet>
        <title>Length Converter - Convert m, ft, cm, in, mm, km, mi | MetricConversion.app</title>
        <meta name="description" content="Free online length converter. Convert between meters, feet, centimeters, inches, millimeters, kilometers, and miles instantly with our accurate conversion calculator." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            <span className="text-[#333] dark:text-[#60a5fa]">Length Converter</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Convert between meters, feet, centimeters, inches, millimeters, kilometers, and miles instantly
          </p>
          
          {/* Unit Selection Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveUnit('m')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeUnit === 'm'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Meters (m)
            </button>
            <button
              onClick={() => setActiveUnit('ft')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeUnit === 'ft'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Feet (ft)
            </button>
            <button
              onClick={() => setActiveUnit('cm')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeUnit === 'cm'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Centimeters (cm)
            </button>
            <button
              onClick={() => setActiveUnit('in')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeUnit === 'in'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Inches (in)
            </button>
            <button
              onClick={() => setActiveUnit('mm')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeUnit === 'mm'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Millimeters (mm)
            </button>
            <button
              onClick={() => setActiveUnit('km')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeUnit === 'km'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Kilometers (km)
            </button>
            <button
              onClick={() => setActiveUnit('mi')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeUnit === 'mi'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Miles (mi)
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

export default MilesToKm; 