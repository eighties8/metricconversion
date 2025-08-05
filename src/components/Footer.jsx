import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-500">
            &copy; {currentYear} MetricConversion.app. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link 
              to="/privacy-policy" 
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Terms of Use
            </Link>
            <Link 
              to="/about" 
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 