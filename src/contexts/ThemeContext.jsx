import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [isAuto, setIsAuto] = useState(true);

  // Check for system preference
  const getSystemTheme = () => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  };

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('metricconversion-theme');
    const savedAuto = localStorage.getItem('metricconversion-auto-theme');
    
    if (savedAuto === 'false') {
      setIsAuto(false);
      setTheme(savedTheme || 'light');
    } else {
      setIsAuto(true);
      setTheme(getSystemTheme());
    }
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    if (!isAuto) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [isAuto]);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setIsAuto(false);
    localStorage.setItem('metricconversion-theme', newTheme);
    localStorage.setItem('metricconversion-auto-theme', 'false');
  };

  const setAutoTheme = () => {
    setIsAuto(true);
    setTheme(getSystemTheme());
    localStorage.setItem('metricconversion-auto-theme', 'true');
  };

  const value = {
    theme,
    isAuto,
    toggleTheme,
    setAutoTheme,
    setTheme: (newTheme) => {
      setTheme(newTheme);
      setIsAuto(false);
      localStorage.setItem('metricconversion-theme', newTheme);
      localStorage.setItem('metricconversion-auto-theme', 'false');
    }
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 