import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  
  const getBreadcrumbItems = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    
    if (pathSegments.length === 0) {
      return [{ label: 'Home', path: '/', current: true }];
    }
    
    const items = [{ label: 'Home', path: '/', current: false }];
    
    pathSegments.forEach((segment, index) => {
      const path = '/' + pathSegments.slice(0, index + 1).join('/');
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      items.push({
        label,
        path,
        current: index === pathSegments.length - 1
      });
    });
    
    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  return (
    <nav className="flex mb-6 px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2 md:space-x-4">
        {breadcrumbItems.map((item, index) => (
          <li key={item.path} className="inline-flex items-center">
            {index > 0 && (
              <svg 
                className="w-4 h-4 text-gray-400 mx-2" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 6 10"
              >
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="m1 9 4-4-4-4"
                />
              </svg>
            )}
            {item.current ? (
              <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-md">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-1 rounded-md transition-all duration-200"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb; 