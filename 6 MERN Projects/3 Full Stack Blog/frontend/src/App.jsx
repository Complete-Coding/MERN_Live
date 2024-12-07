import CreateBlog from "./components/CreateBlog";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BlogProvider } from "./store/BlogContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <BlogProvider>
        <NavBar />
        <div className="min-h-screen bg-gray-100 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-blog" element={<CreateBlog />} />
          </Routes>
        </div>
      </BlogProvider>
    </BrowserRouter>
  );
}

export default App;
