# MetricConversion.app

A fast-loading, SEO-friendly unit conversion website built with Vite + React and styled with Tailwind CSS. Convert between metric and imperial units instantly with real-time calculations.

## Features

- **Fast & Responsive**: Built with Vite for lightning-fast development and optimized builds
- **Modern Design**: Styled with Tailwind CSS for a clean, professional appearance
- **SEO Optimized**: Each page has proper meta tags, titles, and descriptions
- **Mobile-Friendly**: Responsive design that works perfectly on all devices
- **Real-time Conversion**: Instant calculations as you type
- **Multiple Converters**: 10+ specialized conversion tools
- **Universal Converter**: Convert between any supported units
- **Professional Layout**: Consistent header, footer, and navigation across all pages

## Available Converters

- **Weight**: Kilograms to Pounds, Grams to Ounces, Stone to Kilograms
- **Length**: Miles to Kilometers, Feet to Meters, Centimeters to Inches, Inches to Centimeters
- **Volume**: Liters to Gallons
- **Temperature**: Celsius to Fahrenheit

## Pages

- `/` - Home page with universal converter and features
- `/kg-to-lbs` - Kilograms to Pounds converter
- `/grams-to-oz` - Grams to Ounces converter
- `/liters-to-gallons` - Liters to Gallons converter
- `/miles-to-km` - Miles to Kilometers converter
- `/feet-to-meters` - Feet to Meters converter
- `/celsius-to-fahrenheit` - Celsius to Fahrenheit converter
- `/stone-to-kg` - Stone to Kilograms converter
- `/cm-to-inches` - Centimeters to Inches converter
- `/inches-to-cm` - Inches to Centimeters converter
- `/privacy-policy` - Privacy Policy page
- `/terms` - Terms of Use page
- `/about` - About page

## Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS for modern, utility-first styling
- **Routing**: React Router DOM
- **SEO**: React Helmet for meta tags
- **Build Tool**: Vite for fast development and optimized builds

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd metricconversion
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Converter.jsx          # Reusable converter component
│   ├── Header.jsx             # Site header with navigation
│   └── Footer.jsx             # Site footer with links
├── pages/
│   ├── HomePage.jsx           # Home page with universal converter
│   ├── KgToLbs.jsx           # Kilograms to Pounds converter
│   ├── GramsToOz.jsx         # Grams to Ounces converter
│   ├── LitersToGallons.jsx   # Liters to Gallons converter
│   ├── MilesToKm.jsx         # Miles to Kilometers converter
│   ├── FeetToMeters.jsx      # Feet to Meters converter
│   ├── CelsiusToFahrenheit.jsx # Celsius to Fahrenheit converter
│   ├── StoneToKg.jsx         # Stone to Kilograms converter
│   ├── CmToInches.jsx        # Centimeters to Inches converter
│   ├── InchesToCm.jsx        # Inches to Centimeters converter
│   ├── PrivacyPolicy.jsx     # Privacy Policy page
│   ├── Terms.jsx             # Terms of Use page
│   └── About.jsx             # About page
├── App.jsx                   # Main app component with routing
├── main.jsx                  # App entry point
└── index.css                 # Tailwind CSS imports
```

## Design Features

### Tailwind CSS Implementation
- **Utility-first styling** for rapid development
- **Responsive design** with mobile-first approach
- **Modern color palette** with blue and purple gradients
- **Consistent spacing** using Tailwind's spacing scale
- **Professional typography** with proper heading hierarchy

### Layout Components
- **Header**: Sticky navigation with logo and menu items
- **Footer**: Clean footer with links and copyright
- **Main Content**: Centered container with max-width constraints
- **Cards**: White background with shadows for content sections

### Navigation
- **Desktop**: Horizontal navigation bar
- **Mobile**: Hamburger menu with dropdown
- **Active states**: Visual feedback for current page
- **Smooth transitions**: Hover effects and animations

## Features in Detail

### Universal Converter
The home page features a universal converter that can convert between any supported units:
- Weight: kg, lbs, g, oz, stone
- Length: km, miles, m, cm, inches, feet
- Volume: liters, gallons, ml, cups
- Temperature: celsius, fahrenheit, kelvin

### Real-time Conversion
All converters update results instantly as you type, with support for:
- Bidirectional conversion (input in either field)
- Decimal precision (4 decimal places for most units, 2 for temperature)
- Clear functionality to reset inputs

### SEO Optimization
Each page includes:
- Unique, descriptive page titles
- Meta descriptions optimized for search engines
- Proper heading structure
- Semantic HTML markup

### Mobile Responsiveness
The site is fully responsive with:
- Mobile-first design approach
- Touch-friendly input controls
- Optimized layouts for different screen sizes
- Fast loading on mobile networks

## Legal Pages

### Privacy Policy
- Comprehensive privacy policy suitable for AdSense approval
- Covers data collection, usage, and user rights
- Includes cookie policy and third-party services
- GDPR-compliant language

### Terms of Use
- Standard terms and conditions
- Usage license and restrictions
- Liability limitations and disclaimers
- User conduct guidelines

### About Page
- Mission statement and purpose
- Feature overview
- Supported conversions list
- Contact information

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Deployment

The site can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

Simply run `npm run build` and upload the contents of the `dist` directory to your hosting provider.
