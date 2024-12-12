import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from '../../store/slices/customerSlice';

const CustomerProduct = ({product, cart}) => {

  const dispatch = useDispatch();
  const isInCart = cart.includes(product._id);
  
  const handleAddToCart = (productId) => {
    dispatch(addToCart(productId));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div key={product._id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative flex justify-center">
        <img 
          src={"http://localhost:3000/" + product.imageUrl} 
          alt={product.name} 
          className="w-64 object-cover transform hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full shadow">
          <span className="flex items-center">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-lg font-bold text-indigo-600">₹{product.price}</p>
        </div>
        
        <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
        
        <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full">
          {product.category}
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
        
        <div className="mt-4 flex justify-end space-x-2">
          {isInCart ? (
            <button 
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg flex items-center transition-colors duration-300"
              onClick={() => handleRemoveFromCart(product._id)}>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Remove from Cart
            </button>
          ) : (
            <button 
              className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-500 rounded-lg flex items-center transition-colors duration-300"
              onClick={() => handleAddToCart(product._id)}>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CustomerProduct