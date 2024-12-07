const BlogReducer = (currentItems, action) => {
  switch(action.type) {
    case 'SET_BLOGS':
      return action.payload.blogs;
    case 'ADD_BLOG': 
      return [...currentItems, action.payload.blog];
    case 'DELETE_BLOG':
      return currentItems.filter(blog => blog._id !== action.payload.id);
    case 'UPDATE_BLOG':
      return currentItems.map(blog => blog._id === action.payload.blog._id ? action.payload.blog : blog);
    default:
      return currentItems;  
  }
}

export default BlogReducer;
