import { Helmet } from 'react-helmet';
import Converter from '../components/Converter';

const LitersToGallons = () => {
  return (
    <>
      <Helmet>
        <title>Liters to Gallons Converter - Convert L to gal | MetricConversion.app</title>
        <meta name="description" content="Free online liters to gallons converter. Convert liters to gallons and gallons to liters instantly with our accurate conversion calculator." />
      </Helmet>
      <Converter
        title="Liters to Gallons Converter"
        unit1="L"
        unit2="gal"
        conversionRate={0.264172}
        reverseConversionRate={1/0.264172}
        unit1Label="Liters (L)"
        unit2Label="Gallons (gal)"
        description="Convert between liters and gallons instantly. 1 liter equals 0.264172 gallons."
      />
    </>
  );
};

export default LitersToGallons; 