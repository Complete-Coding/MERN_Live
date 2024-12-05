import { useContext } from "react";
import { BlogContext } from "../store/BlogContext";
import Blog from "./Blog";

const BlogList = () => {
  const {blogs} = useContext(BlogContext);
  return (
    <div>
      {blogs.map((blog) => (
        <Blog key={blog._id} blog={blog} />
      ))}
    </div>
  )
}

export default BlogList