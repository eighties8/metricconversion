import { Helmet } from 'react-helmet';
import Converter from '../components/Converter';

const MillimetersInInch = () => {
  return (
    <>
      <Helmet>
        <title>Millimeters in an Inch - Convert mm to inches | MetricConversion.app</title>
        <meta name="description" content="Free online calculator to convert millimeters to inches. Find out how many millimeters are in an inch with our accurate conversion tool." />
      </Helmet>
      <Converter
        title="Millimeters in an Inch Calculator"
        unit1="mm"
        unit2="inches"
        conversionRate={1/25.4}
        reverseConversionRate={25.4}
        unit1Label="Millimeters (mm)"
        unit2Label="Inches"
        description="Convert millimeters to inches instantly. 1 inch equals 25.4 millimeters. Use this calculator to find how many millimeters are in an inch."
      />
    </>
  );
};

export default MillimetersInInch; 