import currencies from '../utils/currencies';

const ConversionResult = ({ result }) => {
  if (!result) return null;

  return (
    <div className="mt-8 p-6 bg-white shadow-lg rounded-xl border-2 border-gray-200">
      <div className="text-center">
        <p className="text-lg text-gray-700 mb-3">
          <span className="text-2xl mr-2">{currencies[result.sourceCurrency].flag}</span>
          {result.amount} {result.sourceCurrency}
        </p>
        <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <p className="text-3xl font-bold text-gray-900">
          <span className="text-4xl mr-2">{currencies[result.targetCurrency].flag}</span>
          {result.convertedAmount} {result.targetCurrency}
        </p>
      </div>
    </div>
  );
};

export default ConversionResult;