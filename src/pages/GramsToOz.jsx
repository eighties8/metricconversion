import { Helmet } from 'react-helmet';
import Converter from '../components/Converter';

const GramsToOz = () => {
  return (
    <>
      <Helmet>
        <title>Grams to Ounces Converter - Convert g to oz | MetricConversion.app</title>
        <meta name="description" content="Free online grams to ounces converter. Convert grams to ounces and ounces to grams instantly with our accurate conversion calculator." />
      </Helmet>
      <Converter
        title="Grams to Ounces Converter"
        unit1="g"
        unit2="oz"
        conversionRate={0.035274}
        reverseConversionRate={1/0.035274}
        unit1Label="Grams (g)"
        unit2Label="Ounces (oz)"
        description="Convert between grams and ounces instantly. 1 gram equals 0.035274 ounces."
      />
    </>
  );
};

export default GramsToOz; 