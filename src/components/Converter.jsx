import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from './Breadcrumb';

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
  const [value1, setValue1] = useState('');
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

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb />
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-gray-600 text-lg">
            {description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <div className="flex-1 max-w-xs">
            <label htmlFor="input1" className="block text-sm font-medium text-gray-700 mb-2">
              {unit1Label}
            </label>
            <input
              id="input1"
              type="number"
              value={value1}
              onChange={handleValue1Change}
              placeholder="Enter value"
              step="any"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="text-2xl text-blue-600 font-bold">
            ⇄
          </div>

          <div className="flex-1 max-w-xs">
            <label htmlFor="input2" className="block text-sm font-medium text-gray-700 mb-2">
              {unit2Label}
            </label>
            <input
              id="input2"
              type="number"
              value={value2}
              onChange={handleValue2Change}
              placeholder="Enter value"
              step="any"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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

        {value1 && value2 && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-lg text-gray-900 text-center">
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