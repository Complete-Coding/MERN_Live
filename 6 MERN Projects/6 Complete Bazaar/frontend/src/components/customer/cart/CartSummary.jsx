import { useDispatch } from 'react-redux';
import { placeOrder } from '../../../store/slices/customerSlice';

const CartSummary = ({products}) => {

  const dispatch = useDispatch();

  let totalPrice = 0;
  for (const product of products) {
    totalPrice += product.price;
  }
  const tax = totalPrice * 0.18;
  const shipping = totalPrice === 0 || totalPrice > 500 ? 0 : 100;
  const grandTotal = totalPrice + tax + shipping;

  const handleOrder = () => {
    dispatch(placeOrder());
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Cart Summary</h2>
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <p className="text-gray-600">Total Price:</p>
          <p className="font-semibold">₹{totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Tax (18%):</p>
          <p className="font-semibold">₹{tax.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Shipping:</p>
          <p className="font-semibold">₹{shipping.toFixed(2)}</p>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between">
            <p className="text-lg font-bold text-gray-900">Grand Total:</p>
            <p className="text-lg font-bold text-indigo-600">₹{grandTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <button
        onClick={handleOrder}
        disabled={products.length === 0}
        className="w-full py-3 text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Place Order
      </button>
    </div>
  )
}

export default CartSummary