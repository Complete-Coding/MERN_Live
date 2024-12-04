import currencies from "../utils/currencies";

const CurrencySelect = ({ value, onChange, label }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {Object.entries(currencies).map(([code, { name, flag }]) => (
          <option key={code} value={code}>
            {flag} {code} - {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;
