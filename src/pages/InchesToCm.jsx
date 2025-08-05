import { Helmet } from 'react-helmet';
import Converter from '../components/Converter';

const InchesToCm = () => {
  return (
    <>
      <Helmet>
        <title>Inches to Centimeters Converter - Convert inches to cm | MetricConversion.app</title>
        <meta name="description" content="Free online inches to centimeters converter. Convert inches to cm and cm to inches instantly with our accurate conversion calculator." />
      </Helmet>
      <Converter
        title="Inches to Centimeters Converter"
        unit1="inches"
        unit2="cm"
        conversionRate={2.54}
        reverseConversionRate={1/2.54}
        unit1Label="Inches"
        unit2Label="Centimeters (cm)"
        description="Convert between inches and centimeters instantly. 1 inch equals 2.54 centimeters."
      />
    </>
  );
};

export default InchesToCm; 