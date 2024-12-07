import { createContext, useReducer } from "react";
import BlogReducer from "./BlogReducer";

export const BlogContext = createContext();

export const BlogProvider = ({children}) => {

  const [blogs, dispatch] = useReducer(BlogReducer, []);

  const setBlogs = (blogs) => {
    dispatch({
      type: 'SET_BLOGS',
      payload: {
        blogs
      }
    })
  };

  const addBlog = (blog) => {
    dispatch({
      type: 'ADD_BLOG',
      payload: {
        blog
      }
    })
  };

  const deleteBlog = (id) => {
    dispatch({
      type: 'DELETE_BLOG',
      payload: {
        id
      }
    })
  };

  const updateBlog = (blog) => {
    dispatch({
      type: 'UPDATE_BLOG',
      payload: {
        blog
      }
    })
  }

  return <BlogContext.Provider value={{blogs, setBlogs, addBlog, deleteBlog, updateBlog}}>
    {children}
  </BlogContext.Provider>
}