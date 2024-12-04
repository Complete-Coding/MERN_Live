const express = require("express");
const blogController = require("../controllers/blogController");
const blogRouter = express.Router();

blogRouter.get("/blogs", blogController.getBlogs);
blogRouter.post("/blogs", blogController.createBlog);
blogRouter.delete("/blogs/:id", blogController.deleteBlog);
blogRouter.put("/blogs/:id/like", blogController.likeBlog);
blogRouter.put("/blogs/:id/comment", blogController.commentBlog);

module.exports = blogRouter;
