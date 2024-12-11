import { useSelector } from "react-redux";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import CustomerHome from "./components/customer/CustomerHome";
import AddProduct from "./components/seller/AddProduct";
import SellerHome from "./components/seller/SellerHome";
import NavBar from "./nav/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { userType } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={userType === 'seller' ? <SellerHome /> : <CustomerHome />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
