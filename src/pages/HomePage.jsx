import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HomePage = () => {
  const [fromUnit, setFromUnit] = useState('kg');
  const [toUnit, setToUnit] = useState('lbs');
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  const unitTypes = {
    weight: [
      { value: 'kg', label: 'Kilograms (kg)' },
      { value: 'lbs', label: 'Pounds (lbs)' },
      { value: 'g', label: 'Grams (g)' },
      { value: 'oz', label: 'Ounces (oz)' },
      { value: 'stone', label: 'Stone (st)' }
    ],
    length: [
      { value: 'm', label: 'Meters (m)' },
      { value: 'ft', label: 'Feet (ft)' },
      { value: 'cm', label: 'Centimeters (cm)' },
      { value: 'in', label: 'Inches (in)' },
      { value: 'km', label: 'Kilometers (km)' },
      { value: 'mi', label: 'Miles (mi)' }
    ],
    volume: [
      { value: 'l', label: 'Liters (L)' },
      { value: 'gal', label: 'Gallons (gal)' },
      { value: 'ml', label: 'Milliliters (ml)' },
      { value: 'floz', label: 'Fluid Ounces (fl oz)' }
    ],
    temperature: [
      { value: 'c', label: 'Celsius (°C)' },
      { value: 'f', label: 'Fahrenheit (°F)' },
      { value: 'k', label: 'Kelvin (K)' }
    ]
  };

  const conversionRates = {
    // Weight conversions
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
    // Length conversions
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
    // Volume conversions
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
    // Temperature conversions
    'c-f': (c) => (c * 9/5) + 32,
    'c-k': (c) => c + 273.15,
    'f-c': (f) => (f - 32) * 5/9,
    'f-k': (f) => (f - 32) * 5/9 + 273.15,
    'k-c': (k) => k - 273.15,
    'k-f': (k) => (k - 273.15) * 9/5 + 32
  };

  const convert = (from, to, value) => {
    if (!value || isNaN(value)) return '';
    
    const key = `${from}-${to}`;
    const rate = conversionRates[key];
    
    if (typeof rate === 'function') {
      return rate(parseFloat(value)).toFixed(2);
    } else if (rate) {
      return (parseFloat(value) * rate).toFixed(2);
    }
    
    return '';
  };

  const getFullPrecision = (from, to, value) => {
    if (!value || isNaN(value)) return '';
    
    const key = `${from}-${to}`;
    const rate = conversionRates[key];
    
    if (typeof rate === 'function') {
      return rate(parseFloat(value)).toString();
    } else if (rate) {
      return (parseFloat(value) * rate).toString();
    }
    
    return '';
  };

  const handleFromValueChange = (e) => {
    const value = e.target.value;
    setFromValue(value);
    if (value && fromUnit && toUnit) {
      setToValue(convert(fromUnit, toUnit, value));
    } else {
      setToValue('');
    }
  };

  const handleToValueChange = (e) => {
    const value = e.target.value;
    setToValue(value);
    if (value && fromUnit && toUnit) {
      setFromValue(convert(toUnit, fromUnit, value));
    } else {
      setFromValue('');
    }
  };

  const handleFromUnitChange = (e) => {
    const newFromUnit = e.target.value;
    setFromUnit(newFromUnit);
    if (fromValue && newFromUnit && toUnit) {
      setToValue(convert(newFromUnit, toUnit, fromValue));
    }
  };

  const handleToUnitChange = (e) => {
    const newToUnit = e.target.value;
    setToUnit(newToUnit);
    if (fromValue && fromUnit && newToUnit) {
      setToValue(convert(fromUnit, newToUnit, fromValue));
    }
  };

  const clearInputs = () => {
    setFromValue('');
    setToValue('');
  };

  const allUnits = [
    ...unitTypes.weight,
    ...unitTypes.length,
    ...unitTypes.volume,
    ...unitTypes.temperature
  ];

  const converters = [
    { path: '/kg-to-lbs', title: 'Weight Converter', description: 'Convert between kilograms, pounds, grams, and ounces', icon: '⚖️' },
    { path: '/miles-to-km', title: 'Length Converter', description: 'Convert between miles, kilometers, meters, and feet', icon: '��' },
    { path: '/fahrenheit-to-celsius', title: 'Temperature Converter', description: 'Convert between Celsius, Fahrenheit, and Kelvin', icon: '🌡️' },
    { path: '/liters-to-gallons', title: 'Volume Converter', description: 'Convert between liters, gallons, and milliliters', icon: '🧪' }
  ];

  return (
    <>
      <Helmet>
        <title>MetricConversion.app - Convert Units Instantly</title>
        <meta name="description" content="Free online unit converter for metric and imperial units. Convert kg to lbs, miles to km, celsius to fahrenheit and more instantly." />
      </Helmet>
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Convert Units Instantly
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Free, fast, and accurate unit conversion for weight, length, volume, and temperature.
          </p>
        </div>

        {/* Universal Converter */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Universal Converter
            </h2>
            <p className="text-gray-600">
              Convert between any units instantly using the dropdown selectors below
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex-1 max-w-xs">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From
              </label>
              <select
                value={fromUnit}
                onChange={handleFromUnitChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {allUnits.map((unit) => (
                  <option key={unit.value} value={unit.value}>
                    {unit.label}
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={fromValue}
                onChange={handleFromValueChange}
                placeholder="Enter value"
                step="any"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors mt-3"
              />
            </div>

            <div className="text-2xl text-blue-600 font-bold">
              ⇄
            </div>

            <div className="flex-1 max-w-xs">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To
              </label>
              <select
                value={toUnit}
                onChange={handleToUnitChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {allUnits.map((unit) => (
                  <option key={unit.value} value={unit.value}>
                    {unit.label}
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={toValue}
                onChange={handleToValueChange}
                placeholder="Enter value"
                step="any"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors mt-3"
              />
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <button
              onClick={clearInputs}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear
            </button>
          </div>

          {fromValue && toValue && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-lg text-gray-900 text-center">
                <span 
                  className="font-semibold cursor-help" 
                  title={`Full precision: ${getFullPrecision(fromUnit, toUnit, fromValue)}`}
                >
                  {fromValue}
                </span> = <span 
                  className="font-semibold cursor-help" 
                  title={`Full precision: ${getFullPrecision(toUnit, fromUnit, toValue)}`}
                >
                  {toValue}
                </span>
              </p>
            </div>
          )}
        </div>

        {/* Converter Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {converters.map((converter) => (
            <Link
              key={converter.path}
              to={converter.path}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{converter.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {converter.title}
              </h3>
              <p className="text-gray-600">
                {converter.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Features - Commented out for now */}
        {/*
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Choose MetricConversion.app?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast & Accurate</h3>
              <p className="text-gray-600">Real-time conversions with precise calculations.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Friendly</h3>
              <p className="text-gray-600">Works perfectly on all devices.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Optimized</h3>
              <p className="text-gray-600">Easy to find what you need quickly.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🆓</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Completely Free</h3>
              <p className="text-gray-600">No registration, no hidden fees.</p>
            </div>
          </div>
        </div>
        */}
      </div>
    </>
  );
};

export default HomePage; 