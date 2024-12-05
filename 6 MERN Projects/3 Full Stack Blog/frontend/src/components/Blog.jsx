import { useContext } from "react";
import formatDate from "../utils/dateUtil";
import CommentForm from "./CommentForm";
import { BlogContext } from "../store/BlogContext";

const Blog = ({blog}) => {

  const { updateBlog, deleteBlog } = useContext(BlogContext);

  const handleLike = () => {
    fetch(`http://localhost:3000/api/blogs/${blog._id}/like`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((resJson) => {
      updateBlog(resJson.blog);
    });
  }

  const handleDelete = () => {
    fetch(`http://localhost:3000/api/blogs/${blog._id}`, {
      method: "DELETE"
    })
    .then(() => {
      deleteBlog(blog._id);
    });
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md m-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{blog.title}</h1>
      <p className="text-gray-600 mb-4">{blog.content}</p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">By</span>
          <span className="font-medium text-gray-700">{blog.author}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">{blog.likes} Likes</span>
          <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={handleLike}
          >
            Like
          </button>
          <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>

      <div className="text-sm text-gray-500 mb-6">
        Written on {formatDate(blog.createdAt)}
      </div>

      <div className="border-t pt-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Comments</h2>
        <div className="space-y-4">
          {blog.comments.map((comment) => (
            <div key={comment._id} className="bg-gray-50 p-3 rounded">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">{comment.username}</span>
                <span className="text-sm text-gray-500">{formatDate(comment.createdAt)}</span>
              </div>
              <p className="text-gray-600 mt-1">{comment.content}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <CommentForm blogId={blog._id} />
        </div>
      </div>
    </div>
  )
}

export default Blog;