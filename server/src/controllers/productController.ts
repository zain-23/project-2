import { Request, Response } from "express";
import productSchemaPost from "../schema/product/product";

const createProductPost = async (req: Request, res: Response) => {
  const products = req.body;
  try {
    const newProduct = new productSchemaPost(products);
    const savedProduct = await newProduct.save();
    res.status(200).json({ message: "successfully add product" });
  } catch (error) {
    throw new Error("Failed to create blog post");
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const allProduct = await productSchemaPost.find();
    res.status(200).json(allProduct);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve blog posts" });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  const postId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedProduct = await productSchemaPost.findByIdAndUpdate(
      postId,
      updatedData,
      {
        new: true,
      }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Failed to update blog post" });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  const postId = req.params.id;
  try {
    const deletedProduct = await productSchemaPost.findByIdAndDelete(postId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.status(200).json({ message: "Blog post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog post" });
  }
};

const getProductById = async (req: Request, res: Response) => {
  const postId = req.params.id;
  try {
    const getProductId = await productSchemaPost.findById(postId);
    if (!getProductId) {
      return res.status(404).json({ message: "Product not Found" });
    }
    res.status(200).json(getProductId);
  } catch (error) {
    res.status(500).json({ message: "Failed to get Product" });
  }
};

export {
  createProductPost,
  getAllProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};
