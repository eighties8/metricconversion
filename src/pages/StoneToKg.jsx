import { Helmet } from 'react-helmet';
import Converter from '../components/Converter';

const StoneToKg = () => {
  return (
    <>
      <Helmet>
        <title>Stone to Kilograms Converter - Convert stone to kg | MetricConversion.app</title>
        <meta name="description" content="Free online stone to kilograms converter. Convert stone to kg and kg to stone instantly with our accurate conversion calculator." />
      </Helmet>
      <Converter
        title="Stone to Kilograms Converter"
        unit1="stone"
        unit2="kg"
        conversionRate={6.35029}
        reverseConversionRate={1/6.35029}
        unit1Label="Stone"
        unit2Label="Kilograms (kg)"
        description="Convert between stone and kilograms instantly. 1 stone equals 6.35029 kilograms."
      />
    </>
  );
};

export default StoneToKg; 