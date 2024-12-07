import { useContext, useRef, useState } from "react";
import { BlogContext } from "../store/BlogContext";

const CommentForm = ({blogId}) => {

  const { updateBlog } = useContext(BlogContext);
  const [commenting, sendingComment] = useState(false);
  const usernameRef = useRef(null);
  const commentRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendingComment(true);
    fetch(`http://localhost:3000/api/blogs/${blogId}/comment`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameRef.current.value,
        content: commentRef.current.value
      }),
    })
    .then((res) => res.json())
    .then((resJson) => {
      updateBlog(resJson.blog);
      usernameRef.current.value = "";
      commentRef.current.value = "";
    })
    .finally(() => {
      sendingComment(false);
    });
  }

  return (
    <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
      <div>
        <input 
          type="text" 
          placeholder="Username" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          ref={usernameRef}
        />
      </div>
      <div>
        <textarea
          placeholder="Write your comment..." 
          rows="3"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          ref={commentRef}
        />
      </div>
      <button 
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {commenting ? "Posting..." : "Post Comment"}
      </button>
    </form>
  )
}

export default CommentForm