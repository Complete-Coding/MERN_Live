const SellerProduct = ({product, handleDeleteProduct}) => {
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
          <button className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-500"
            onClick={() => handleDeleteProduct(product._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default SellerProduct