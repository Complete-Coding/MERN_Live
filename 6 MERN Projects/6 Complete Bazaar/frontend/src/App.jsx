import Signup from "./components/auth/Signup";
import AddProduct from "./components/seller/AddProduct";
import NavBar from "./nav/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/login" element={<div>Login Page</div>} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
