import { Request, Response } from "express";
import BlogPost from "../schema/blogs/blog";

const createBlogPost = async (req: Request, res: Response) => {
  const blogs = req.body;
  try {
    const newBlogPost = new BlogPost(blogs);
    const savedBlogPost = await newBlogPost.save();
    res.status(200).json({message:"Blog Added successfully"});
  } catch (error) {
    throw new Error("Failed to create blog post");
  }
};

const getAllBlogPosts = async (req: Request, res: Response) => {
  try {
    const blogPosts = await BlogPost.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve blog posts" });
  }
};

const updateBlogPost = async (req: Request, res: Response) => {
  const postId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(
      postId,
      updatedData,
      {
        new: true,
      }
    );
    if (!updatedBlogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.status(200).json(updatedBlogPost);
  } catch (error) {
    res.status(500).json({ message: "Failed to update blog post" });
  }
};

const getBlogById = async (req: Request, res: Response) => {
  const postId = req.params.id;
  try {
    const getBlogId = await BlogPost.findById(postId);
    if (!getBlogId) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.status(200).json(getBlogId);
  } catch (error) {
    res.status(500).json({ message: "Failed to update blog post" });
  }
};

const deleteBlogPost = async (req: Request, res: Response) => {
  const postId = req.params.id;
  try {
    const deletedBlogPost = await BlogPost.findByIdAndDelete(postId);
    if (!deletedBlogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.status(200).json({ message: "Blog post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog post" });
  }
};

export {
  createBlogPost,
  getAllBlogPosts,
  updateBlogPost,
  deleteBlogPost,
  getBlogById,
};
