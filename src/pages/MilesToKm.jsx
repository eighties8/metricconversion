import { Helmet } from 'react-helmet';
import Converter from '../components/Converter';

const MilesToKm = () => {
  return (
    <>
      <Helmet>
        <title>Miles to Kilometers Converter - Convert miles to km | MetricConversion.app</title>
        <meta name="description" content="Free online miles to kilometers converter. Convert miles to km and km to miles instantly with our accurate conversion calculator." />
      </Helmet>
      <Converter
        title="Miles to Kilometers Converter"
        unit1="miles"
        unit2="km"
        conversionRate={1.60934}
        reverseConversionRate={1/1.60934}
        unit1Label="Miles"
        unit2Label="Kilometers (km)"
        description="Convert between miles and kilometers instantly. 1 mile equals 1.60934 kilometers."
      />
    </>
  );
};

export default MilesToKm; 