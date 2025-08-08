import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [fromUnit, setFromUnit] = useState('cm');
  const [toUnit, setToUnit] = useState('in');
  const [fromValue, setFromValue] = useState('10');
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
      { value: 'mm', label: 'Millimeters (mm)' },
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

  // Map unit values to display symbols for result text
  const getUnitSymbol = (unit) => {
    switch (unit) {
      case 'c':
        return '°C';
      case 'f':
        return '°F';
      case 'k':
        return 'K';
      case 'l':
        return 'L';
      case 'ml':
        return 'ml';
      case 'floz':
        return 'fl oz';
      case 'lbs':
        return 'lbs';
      case 'stone':
        return 'st';
      default:
        return unit; // m, cm, in, mm, km, mi, kg, g, oz, gal, etc.
    }
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

    // If units are the same, return the value unchanged (formatted)
    if (from === to) {
      return parseFloat(value).toFixed(2);
    }
    
    const key = `${from}-${to}`;
    const rate = conversionRates[key];
    
    if (typeof rate === 'function') {
      return rate(parseFloat(value)).toFixed(2);
    } else if (rate) {
      return (parseFloat(value) * rate).toFixed(2);
    }
    
    return '';
  };

  // Perform initial calculation when component mounts
  useEffect(() => {
    if (fromValue && fromValue !== '' && fromUnit && toUnit) {
      setToValue(convert(fromUnit, toUnit, fromValue));
    }
  }, []); // Empty dependency array means this runs once on mount

  const getFullPrecision = (from, to, value) => {
    if (!value || isNaN(value)) return '';

    // Same-unit full precision is just the input
    if (from === to) {
      return parseFloat(value).toString();
    }
    
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

  // Helper: map unit to category
  const unitToCategory = {};
  Object.entries(unitTypes).forEach(([cat, arr]) => {
    arr.forEach(u => { unitToCategory[u.value] = cat; });
  });

  // Get allowed units for the other dropdown based on current selections
  const allowedToUnits = unitTypes[unitToCategory[fromUnit]] || [];
  const allowedFromUnits = unitTypes[unitToCategory[toUnit]] || [];

  // Update handleFromUnitChange to auto-select compatible To unit
  const handleFromUnitChange = (e) => {
    const newFromUnit = e.target.value;
    setFromUnit(newFromUnit);
    const newCategory = unitToCategory[newFromUnit];
    const allowed = unitTypes[newCategory];
    // If current toUnit is not allowed, pick first allowed
    let newToUnit = toUnit;
    if (!allowed.some(u => u.value === toUnit)) {
      newToUnit = allowed[0].value;
      setToUnit(newToUnit);
    }
    // Recalculate conversion with new units
    if (fromValue && newFromUnit && newToUnit) {
      setToValue(convert(newFromUnit, newToUnit, fromValue));
    }
  };

  // Update handleToUnitChange to auto-select compatible From unit
  const handleToUnitChange = (e) => {
    const newToUnit = e.target.value;
    setToUnit(newToUnit);
    const newCategory = unitToCategory[newToUnit];
    const allowed = unitTypes[newCategory];
    // If current fromUnit is not allowed, pick first allowed
    let newFromUnit = fromUnit;
    if (!allowed.some(u => u.value === fromUnit)) {
      newFromUnit = allowed[0].value;
      setFromUnit(newFromUnit);
    }
    // Recalculate conversion with new units
    if (toValue && newToUnit && newFromUnit) {
      setFromValue(convert(newToUnit, newFromUnit, toValue));
    }
  };

  const clearInputs = () => {
    setFromValue('');
    setToValue('');
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here if desired
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const allUnits = [
    ...unitTypes.weight,
    ...unitTypes.length,
    ...unitTypes.volume,
    ...unitTypes.temperature
  ];

  const converters = [
    { 
      path: '/kg-to-lbs', 
      title: 'Weight Converter', 
      description: 'Convert between kilograms, pounds, grams, and ounces', 
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      path: '/miles-to-km',
      title: 'Length Converter',
      description: 'Convert between miles, kilometers, meters, and feet',
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="10" width="18" height="4" rx="2" />
          <path d="M7 10v4M11 10v4M15 10v4" />
        </svg>
      )
    },
    { 
      path: '/fahrenheit-to-celsius', 
      title: 'Temperature Converter', 
      description: 'Convert between Celsius, Fahrenheit, and Kelvin', 
      icon: (
        <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9a3 3 0 100 6 3 3 0 000-6zM12 3v1m0 16v1m9-9h-1M3 12h1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    { 
      path: '/liters-to-gallons', 
      title: 'Volume Converter', 
      description: 'Convert between liters, gallons, and milliliters', 
      icon: (
        <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>MetricConversion.app - Convert Units Instantly</title>
        <meta name="description" content="Free online unit converter for metric and imperial units. Convert kg to lbs, miles to km, celsius to fahrenheit and more instantly." />
      </Helmet>
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            <span className="text-[#333] dark:text-[#60a5fa]">Convert Units</span> <span className="text-gray-800 dark:text-white">Instantly</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            <Link to="/cm-to-inches" className="text-[#333] dark:text-blue-400 hover:underline" onClick={() => { setFromUnit('cm'); setToUnit('in'); }}>cm to inches</Link>,{' '}
            <Link to="/kg-to-lbs" className="text-[#333] dark:text-blue-400 hover:underline" onClick={() => { setFromUnit('kg'); setToUnit('lbs'); }}>kg to lbs</Link>,{' '}
            <Link to="/cm-to-inches" className="text-[#333] dark:text-blue-400 hover:underline" onClick={() => { setFromUnit('mm'); setToUnit('in'); }}>mm to inches</Link>,{' '}
            <Link to="/kg-to-lbs" className="text-[#333] dark:text-blue-400 hover:underline" onClick={() => { setFromUnit('lbs'); setToUnit('kg'); }}>lbs to kg</Link>,{' '}
            <Link to="/millimeters-in-inch" className="text-[#333] dark:text-blue-400 hover:underline" onClick={() => { setFromUnit('mm'); setToUnit('in'); }}>millimeters in an inch</Link>,{' '}
            <Link to="/fahrenheit-to-celsius" className="text-[#333] dark:text-blue-400 hover:underline" onClick={() => { setFromUnit('c'); setToUnit('f'); }}>celcius to farenheit</Link>,{' '}
            <Link to="/grams-to-oz" className="text-[#333] dark:text-blue-400 hover:underline" onClick={() => { setFromUnit('g'); setToUnit('oz'); }}>grams to ounces</Link>,{' '}
            <Link to="/cm-to-inches" className="text-[#333] dark:text-blue-400 hover:underline" onClick={() => { setFromUnit('cm'); setToUnit('in'); }}>conversion cm to inches</Link>,{' '}
            <Link to="/kg-to-lbs" className="text-[#333] dark:text-blue-400 hover:underline" onClick={() => { setFromUnit('lbs'); setToUnit('kg'); }}>pound converter</Link>,{' '}
            <Link to="/kg-to-lbs" className="text-[#333] dark:text-blue-400 hover:underline" onClick={() => { setFromUnit('kg'); setToUnit('lbs'); }}>kilos to pounds</Link>, {' '}
            <Link to="/fahrenheit-to-celsius" className="text-[#333] dark:text-blue-400 hover:underline" onClick={() => { setFromUnit('c'); setToUnit('f'); }}>centigrade into fahrenheit</Link>
          </p>
        </div>

        {/* Universal Converter */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-2xl p-8 mb-16 border border-gray-100 dark:border-gray-700">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
              Universal Converter
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Convert between any units instantly using the dropdown selectors below
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex-1 max-w-xs">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                From
              </label>
              <select
                value={fromUnit}
                onChange={handleFromUnitChange}
                className="w-full px-4 py-3 border border-gray-600 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
              >
                {allUnits.map((unit) => (
                  <option key={unit.value} value={unit.value}>
                    {unit.label}
                  </option>
                ))}
              </select>
              <div className="relative mt-3">
                <input
                  type="number"
                  value={fromValue}
                  onChange={handleFromValueChange}
                  placeholder="Enter value"
                  step="any"
                  className="w-full px-4 py-3 pr-12 border border-gray-600 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 transition-colors"
                />
                {fromValue && (
                  <button
                    onClick={() => copyToClipboard(fromValue)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-blue-500 transition-colors"
                    title="Copy to clipboard"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            <div className="text-2xl text-blue-400 font-bold">
              ⇄
            </div>

            <div className="flex-1 max-w-xs">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                To
              </label>
              <select
                value={toUnit}
                onChange={handleToUnitChange}
                className="w-full px-4 py-3 border border-gray-600 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
              >
                {allUnits.map((unit) => (
                  <option key={unit.value} value={unit.value} disabled={!allowedToUnits.some(u => u.value === unit.value)}>
                    {unit.label}
                  </option>
                ))}
              </select>
              <div className="relative mt-3">
                <input
                  type="number"
                  value={toValue}
                  onChange={handleToValueChange}
                  placeholder="Enter value"
                  step="any"
                  className="w-full px-4 py-3 pr-12 border border-gray-600 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 transition-colors"
                />
                {toValue && (
                  <button
                    onClick={() => copyToClipboard(toValue)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-blue-500 transition-colors"
                    title="Copy to clipboard"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                )}
              </div>
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
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-lg text-gray-900 dark:text-white text-center">
                <span 
                  className="font-semibold cursor-help" 
                  title={`Full precision: ${getFullPrecision(fromUnit, toUnit, fromValue)}`}
                >
                  {fromValue} {getUnitSymbol(fromUnit)}
                </span> = <span 
                  className="font-semibold cursor-help" 
                  title={`Full precision: ${getFullPrecision(toUnit, fromUnit, toValue)}`}
                >
                  {toValue} {getUnitSymbol(toUnit)}
                </span>
              </p>
            </div>
          )}
        </div>

        {/* Converter Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {converters.map((converter) => (
            <Link
              key={converter.path}
              to={converter.path}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-200 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-4xl mb-4">{converter.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-poppins">
                {converter.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
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