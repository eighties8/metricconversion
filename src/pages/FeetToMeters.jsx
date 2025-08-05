import { Helmet } from 'react-helmet';
import Converter from '../components/Converter';

const FeetToMeters = () => {
  return (
    <>
      <Helmet>
        <title>Feet to Meters Converter - Convert ft to m | MetricConversion.app</title>
        <meta name="description" content="Free online feet to meters converter. Convert feet to meters and meters to feet instantly with our accurate conversion calculator." />
      </Helmet>
      <Converter
        title="Feet to Meters Converter"
        unit1="ft"
        unit2="m"
        conversionRate={0.3048}
        reverseConversionRate={1/0.3048}
        unit1Label="Feet (ft)"
        unit2Label="Meters (m)"
        description="Convert between feet and meters instantly. 1 foot equals 0.3048 meters."
      />
    </>
  );
};

export default FeetToMeters; 