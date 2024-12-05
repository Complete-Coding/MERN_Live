import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../store/BlogContext";

const BlogLoader = ({children}) => {
  const {setBlogs} = useContext(BlogContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/blogs")
    .then((res) => res.json())
    .then((resJson) => {
      setBlogs(resJson.blogs);
    })
    .catch((err) => {
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="container mx-auto px-4">
      {loading && (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      {error && (
        <div className="text-center min-h-[400px] flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-red-500 mb-2">Oops! Something went wrong</h1>
          <p className="text-gray-600">Unable to load blogs. Please try again later.</p>
        </div>
      )}

      {!loading && !error && children}
    </div>
  )
}

export default BlogLoader