import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store/slices/authSlice';

const NavBar = () => {

  const { isLoggedIn, userType } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-500">
              Complete Bazaar
            </Link>
            {isLoggedIn && userType === 'seller' && <div className="ml-10 flex items-center space-x-4">
              <Link to="/add-product" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                Add Product
              </Link>
            </div>}
            {isLoggedIn && userType === 'customer' && <div className="ml-10 flex items-center space-x-4">
              <Link to="/cart" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                Cart
              </Link>
            </div>}
          </div>
          {!isLoggedIn && <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
            <Link to="/signup" className="bg-indigo-600 text-white hover:bg-indigo-500 px-4 py-2 rounded-md text-sm font-medium">
              Signup
            </Link>
          </div>}
          {isLoggedIn && <div className="flex items-center space-x-4">
            <button onClick={handleLogout} className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Logout
            </button>
          </div>}
        </div>
      </div>
    </nav>
  )
}

export default NavBar