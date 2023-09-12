import { Request, Response } from "express";
import order from "../schema/order/orderSchema";

const orderPost = async (req: Request, res: Response) => {
  const orders = req.body;
  try {
    const newOrder = new order(orders);
    const savedOrder = await newOrder.save();
    res.status(500).json({ message: "successfully send order" });
  } catch (error) {
    res.status(500).json({ message: "request failed" });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const allOrder = await order.find();
    res.status(200).json(allOrder);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve blog posts" });
  }
};

const deleteOrder = async (req: Request, res: Response) => {
  const orderID = req.params.id;
  try {
    const deletedOrder = await order.findByIdAndDelete(orderID);
    if (!deletedOrder) {
      return res.status(404).json({ message: "order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Order" });
  }
};

export { orderPost, getAllOrder, deleteOrder };
