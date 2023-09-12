import express from "express";
import { deleteOrder, getAllOrder, orderPost } from "../controllers/order";

const orderRoutes = express.Router();

orderRoutes.post("/addorder", orderPost);
orderRoutes.get("/allorder", getAllOrder);
orderRoutes.delete("/:id", deleteOrder);

export default orderRoutes;
