const Button = ({btnType, btnText, handler}) => {
  const baseClasses = "px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105";
  
  if (btnType === 'success') {
    return (
      <button 
        className={`${baseClasses} bg-emerald-500 text-white hover:bg-emerald-600`}
        onClick={handler}
      >
        {btnText}
      </button>
    );
  } else if (btnType === 'danger') {
    return (
      <button 
        className={`${baseClasses} bg-red-500 text-white hover:bg-red-600`}
        onClick={handler}
      >
        {btnText}
      </button>
    );
  } else {
    return (
      <button 
        className={`${baseClasses} bg-blue-500 text-white hover:bg-blue-600`}
        onClick={handler}
      >
        {btnText}
      </button>
    );
  }
};

export default Button;