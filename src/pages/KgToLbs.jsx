import { Helmet } from 'react-helmet';
import Converter from '../components/Converter';

const KgToLbs = () => {
  return (
    <>
      <Helmet>
        <title>Kilograms to Pounds Converter - Convert kg to lbs | MetricConversion.app</title>
        <meta name="description" content="Free online kilograms to pounds converter. Convert kg to lbs and lbs to kg instantly with our accurate conversion calculator." />
      </Helmet>
      <Converter
        title="Kilograms to Pounds Converter"
        unit1="kg"
        unit2="lbs"
        conversionRate={2.20462}
        reverseConversionRate={1/2.20462}
        unit1Label="Kilograms (kg)"
        unit2Label="Pounds (lbs)"
        description="Convert between kilograms and pounds instantly. 1 kilogram equals 2.20462 pounds."
      />
    </>
  );
};

export default KgToLbs; 