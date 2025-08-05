import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Converter = ({ 
  title, 
  description, 
  unit1, 
  unit2, 
  unit1Label, 
  unit2Label, 
  conversionRate, 
  reverseConversionRate,
  customConversion1to2,
  customConversion2to1
}) => {
  const [value1, setValue1] = useState('10');
  const [value2, setValue2] = useState('');
  const [lastChanged, setLastChanged] = useState(''); // Track which input was last changed

  // Helper function to format display value (2 decimal places) and full precision
  const formatDisplayValue = (value) => {
    if (value === '' || value === null || value === undefined || isNaN(value)) return '';
    const numValue = parseFloat(value);
    return numValue.toFixed(2);
  };

  const getFullPrecision = (value) => {
    if (value === '' || value === null || value === undefined || isNaN(value)) return '';
    const numValue = parseFloat(value);
    return numValue.toString();
  };

  // Perform initial calculation when component mounts
  useEffect(() => {
    if (value1 && value1 !== '') {
      const inputValue = parseFloat(value1);
      if (!isNaN(inputValue)) {
        const converted = customConversion1to2 
          ? customConversion1to2(inputValue)
          : inputValue * conversionRate;
        setValue2(formatDisplayValue(converted));
      }
    }
  }, []); // Empty dependency array means this runs once on mount

  // Note: Conversion logic moved to input handlers for immediate response

  const handleValue1Change = (e) => {
    const newValue = e.target.value;
    setValue1(newValue);
    setLastChanged('value1');
    
    // Immediately calculate conversion for responsive input
    if (newValue !== '') {
      const inputValue = parseFloat(newValue);
      if (!isNaN(inputValue)) {
        const converted = customConversion1to2 
          ? customConversion1to2(inputValue)
          : inputValue * conversionRate;
        setValue2(formatDisplayValue(converted));
      }
    } else {
      setValue2('');
    }
  };

  const handleValue2Change = (e) => {
    const newValue = e.target.value;
    setValue2(newValue);
    setLastChanged('value2');
    
    // Immediately calculate conversion for responsive input
    if (newValue !== '') {
      const inputValue = parseFloat(newValue);
      if (!isNaN(inputValue)) {
        const converted = customConversion2to1 
          ? customConversion2to1(inputValue)
          : inputValue * reverseConversionRate;
        setValue1(formatDisplayValue(converted));
      }
    } else {
      setValue1('');
    }
  };

  const clearInputs = () => {
    setValue1('');
    setValue2('');
    setLastChanged('');
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here if desired
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
          <span className="text-[#333] dark:text-[#60a5fa]">{title}</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <div className="flex-1 max-w-xs">
            <label htmlFor="input1" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {unit1Label}
            </label>
            <div className="relative">
              <input
                id="input1"
                type="number"
                value={value1}
                onChange={handleValue1Change}
                placeholder="Enter value"
                step="any"
                className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 transition-colors"
              />
              {value1 && (
                <button
                  onClick={() => copyToClipboard(value1)}
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

          <div className="text-2xl text-blue-600 dark:text-blue-400 font-bold">
            ⇄
          </div>

          <div className="flex-1 max-w-xs">
            <label htmlFor="input2" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {unit2Label}
            </label>
            <div className="relative">
              <input
                id="input2"
                type="number"
                value={value2}
                onChange={handleValue2Change}
                placeholder="Enter value"
                step="any"
                className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 transition-colors"
              />
              {value2 && (
                <button
                  onClick={() => copyToClipboard(value2)}
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

        {value1 && value2 && (
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-lg text-gray-900 dark:text-white text-center">
              <span 
                className="font-semibold cursor-help" 
                title={`Full precision: ${getFullPrecision(
                  customConversion1to2 
                    ? customConversion1to2(parseFloat(value1))
                    : parseFloat(value1) * conversionRate
                )} ${unit2}`}
              >
                {value1} {unit1}
              </span> = <span 
                className="font-semibold cursor-help" 
                title={`Full precision: ${getFullPrecision(
                  customConversion2to1 
                    ? customConversion2to1(parseFloat(value2))
                    : parseFloat(value2) * reverseConversionRate
                )} ${unit1}`}
              >
                {value2} {unit2}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Converter; 