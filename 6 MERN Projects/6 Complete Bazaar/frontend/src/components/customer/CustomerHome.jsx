import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessages from '../common/ErrorMessages';
import { fetchCustomerData } from '../../store/slices/customerSlice';
import CustomerProduct from './CustomerProduct';

const CustomerHome = () => {

  const { products, cart, isLoading, errorMessages } = useSelector((state) => state.customer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCustomerData());
  }, [dispatch]);

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Products</h1>
      <ErrorMessages errorMessages={errorMessages} />
      {!products || products.length === 0 ? (
        <p>No products found. Start by adding some products.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <CustomerProduct key={product._id} product={product} cart={cart} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomerHome;