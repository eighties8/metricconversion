import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import KgToLbs from './pages/KgToLbs';
import GramsToOz from './pages/GramsToOz';
import LitersToGallons from './pages/LitersToGallons';
import MilesToKm from './pages/MilesToKm';
import FeetToMeters from './pages/FeetToMeters';
import FahrenheitToCelsius from './pages/FahrenheitToCelsius';
import StoneToKg from './pages/StoneToKg';
import CmToInches from './pages/CmToInches';
import InchesToCm from './pages/InchesToCm';
import MillimetersInInch from './pages/MillimetersInInch';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider>
      <Router>
                            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <Helmet>
            <title>MetricConversion.app - Convert Units Instantly</title>
            <meta name="description" content="Free online unit converter for metric and imperial units. Convert kg to lbs, miles to km, celsius to fahrenheit and more instantly." />
            <meta name="keywords" content="unit converter, metric converter, imperial converter, kg to lbs, miles to km, celsius to fahrenheit" />
          </Helmet>
          
          <Header />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/kg-to-lbs" element={<KgToLbs />} />
              <Route path="/grams-to-oz" element={<GramsToOz />} />
              <Route path="/liters-to-gallons" element={<LitersToGallons />} />
              <Route path="/miles-to-km" element={<MilesToKm />} />
              <Route path="/feet-to-meters" element={<FeetToMeters />} />
              <Route path="/fahrenheit-to-celsius" element={<FahrenheitToCelsius />} />
              <Route path="/stone-to-kg" element={<StoneToKg />} />
                          <Route path="/cm-to-inches" element={<CmToInches />} />
            <Route path="/inches-to-cm" element={<InchesToCm />} />
            <Route path="/millimeters-in-inch" element={<MillimetersInInch />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
