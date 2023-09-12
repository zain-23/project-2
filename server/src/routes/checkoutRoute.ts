import express from "express";

const checkoutroute = express.Router();

checkoutroute.post("/addcart");
checkoutroute.get("/allblogs");
checkoutroute.delete("/:id");

export default checkoutroute;
