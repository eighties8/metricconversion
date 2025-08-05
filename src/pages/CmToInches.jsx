import { Helmet } from 'react-helmet';
import Converter from '../components/Converter';

const CmToInches = () => {
  return (
    <>
      <Helmet>
        <title>Centimeters to Inches Converter - Convert cm to inches | MetricConversion.app</title>
        <meta name="description" content="Free online centimeters to inches converter. Convert cm to inches and inches to cm instantly with our accurate conversion calculator." />
      </Helmet>
      <Converter
        title="Centimeters to Inches Converter"
        unit1="cm"
        unit2="inches"
        conversionRate={0.393701}
        reverseConversionRate={1/0.393701}
        unit1Label="Centimeters (cm)"
        unit2Label="Inches"
        description="Convert between centimeters and inches instantly. 1 centimeter equals 0.393701 inches."
      />
    </>
  );
};

export default CmToInches; 