import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../store/BlogContext";

const CreateBlog = () => {
  const {addBlog} = useContext(BlogContext);
  const titleRef = useRef();
  const contentRef = useRef();
  const authorRef = useRef();
  const navigate = useNavigate();

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const author = authorRef.current.value;

    fetch("http://localhost:3000/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title, content, author
      }),
    })
    .then((res) => res.json())
    .then((resJson) => {
      addBlog(resJson.blog);
      titleRef.current.value = "";
      contentRef.current.value = "";
      authorRef.current.value = "";
      navigate("/");
    });
  }

  return (<>
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Pour your heart out</h2>
      <form className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-lg" onSubmit={handleCreateBlog}>
        <input 
          type="text" 
          placeholder="Title" 
          ref={titleRef}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <textarea 
          placeholder="Content" 
          ref={contentRef}
          className="p-3 border border-gray-300 rounded-md h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input 
          type="text" 
          placeholder="Author" 
          ref={authorRef}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button 
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
        >
          Create Blog Post
        </button>
      </form>
    </div>
    </>
  )
}

export default CreateBlog