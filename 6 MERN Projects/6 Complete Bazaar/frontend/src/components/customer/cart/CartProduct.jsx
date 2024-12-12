import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../store/slices/customerSlice";

const CartProduct = ({product}) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <img 
          src={"http://localhost:3000/" + product.imageUrl}
          alt={product.name}
          className="w-24 h-24 object-cover rounded-md"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
          <p className="text-sm text-gray-600">{product.brand}</p>
          <div className="mt-1">
            <span className="text-lg font-bold text-indigo-600">₹{product.price}</span>
          </div>
        </div>
      </div>
      
      <button 
        className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg flex items-center transition-colors duration-300"
        onClick={() => handleRemoveFromCart(product._id)}>
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        Remove
      </button>
    </div>
  )
}

export default CartProduct