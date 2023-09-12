import express from "express";
import {
  createProductPost,
  deleteProduct,
  getAllProduct,
  getProductById,
  updateProduct,
} from "../controllers/productController";
import { verifyToken } from "../config/auth";

const productRoutes = express.Router();

productRoutes.post("/addproducts", verifyToken, createProductPost);
productRoutes.get("/allproducts", getAllProduct);
productRoutes.delete("/:id", verifyToken, deleteProduct);
productRoutes.put("/updateproduct/:id", verifyToken, updateProduct);
productRoutes.get("/getbyid/:id", getProductById);

export default productRoutes;
