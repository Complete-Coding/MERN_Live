import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSellerProducts } from '../../store/slices/sellerSlice';

const SellerHome = () => {

  const { products, isLoading, errorMessages } = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchSellerProducts());
  }, [dispatch]);

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>
  }

  if (errorMessages.length > 0) {
    return (
      <div className="text-center mt-8 text-red-500">
        {errorMessages.map((error, index) => (
          <p key={index}>{error}</p>
        ))}
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Products</h1>
      {products.length === 0 ? (
        <p>No products found. Start by adding some products.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product._id} className="border rounded-lg p-4 shadow">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-gray-500">{product.description}</p>
              <p className="text-sm text-gray-400">Stock: {product.stock}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SellerHome