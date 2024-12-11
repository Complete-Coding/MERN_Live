const ErrorMessages = ({errorMessages}) => {

  if (!errorMessages ||errorMessages.length === 0) return null;

  return (
    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
      <ul className="list-disc pl-5 space-y-1">
        {errorMessages.map((errorMsg, index) => (
          <li key={index} className="text-red-700 text-sm">
            {errorMsg}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ErrorMessages