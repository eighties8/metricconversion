import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - MetricConversion.app</title>
        <meta name="description" content="Learn about MetricConversion.app - a free online unit converter for metric and imperial units. Fast, accurate, and easy to use." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About MetricConversion.app</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                MetricConversion.app was created to provide a simple, fast, and accurate solution for unit conversion needs. In today's interconnected world, we often need to convert between metric and imperial units for various purposes - whether it's cooking recipes, construction projects, scientific calculations, or simply understanding measurements from different countries.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our goal is to make unit conversion accessible to everyone, regardless of their technical background. We believe that accurate conversions should be free, fast, and available without any registration requirements. Whether you're a student, professional, or just someone who needs to convert units occasionally, our tools are designed to help you get the results you need quickly and reliably.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">🔢 Universal Converter</h3>
                  <p className="text-blue-800">
                    Convert between any supported units instantly with our comprehensive universal converter.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">⚡ Real-time Results</h3>
                  <p className="text-green-800">
                    Get instant conversions as you type, with no need to click buttons or wait for results.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">📱 Mobile Friendly</h3>
                  <p className="text-purple-800">
                    Optimized for all devices - use our converters on your phone, tablet, or desktop.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-900 mb-3">🆓 Completely Free</h3>
                  <p className="text-orange-800">
                    No registration required, no hidden fees - just free unit conversion tools.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Supported Conversions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Weight</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Kilograms to Pounds</li>
                    <li>• Grams to Ounces</li>
                    <li>• Stone to Kilograms</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Length</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Miles to Kilometers</li>
                    <li>• Feet to Meters</li>
                    <li>• Centimeters to Inches</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Volume</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Liters to Gallons</li>
                    <li>• Milliliters to Cups</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Temperature</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Celsius to Fahrenheit</li>
                    <li>• Kelvin conversions</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                Have questions, suggestions, or feedback? We'd love to hear from you!
              </p>
              <p className="text-gray-700">
                Email: contact@metricconversion.app<br />
                Website: https://metricconversion.app
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default About; 