import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-500">
              Complete Bazaar
            </Link>
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/add-product" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                Add Product
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
            <Link to="/signup" className="bg-indigo-600 text-white hover:bg-indigo-500 px-4 py-2 rounded-md text-sm font-medium">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar