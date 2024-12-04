import { useState, useEffect } from 'react';
import AmountInput from './AmountInput';
import CurrencySelect from './CurrencySelect';
import ConversionResult from './ConversionResult';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [sourceCurrency, setSourceCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('INR');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (!amount || !sourceCurrency || !targetCurrency) return;

    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/exchange/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          sourceCurrency,
          targetCurrency,
        }),
      });
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (amount) {
        handleConvert();
      }
    }, 500); // 500ms delay

    return () => clearTimeout(timeoutId);
  }, [amount, sourceCurrency, targetCurrency]);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 m-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Currency Exchange</h2>
      
      <div className="space-y-6">
        <AmountInput amount={amount} onChange={setAmount} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CurrencySelect
            label="From"
            value={sourceCurrency}
            onChange={setSourceCurrency}
          />
          <CurrencySelect
            label="To"
            value={targetCurrency}
            onChange={setTargetCurrency}
          />
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <ConversionResult result={result} />
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;