const AmountInput = ({ amount, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter amount"
      />
    </div>
  );
};

export default AmountInput; 