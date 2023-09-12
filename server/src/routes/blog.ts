import express from "express";
import {
  createBlogPost,
  deleteBlogPost,
  getAllBlogPosts,
  getBlogById,
  updateBlogPost,
} from "../controllers/blogController";
import { verifyToken } from "../config/auth";

const blogRoutes = express.Router();

blogRoutes.post("/addblogs", verifyToken, createBlogPost);
blogRoutes.get("/allblogs", getAllBlogPosts);
blogRoutes.get("/getbyid/:id", getBlogById);
blogRoutes.delete("/:id", verifyToken, deleteBlogPost);
blogRoutes.put("/updateBlog/:id", verifyToken, updateBlogPost);

export default blogRoutes;
