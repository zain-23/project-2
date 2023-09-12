import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productCotegory: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productContent: { type: String, required: true },
});

const productSchemaPost = mongoose.model("productSchema", productSchema);

export default productSchemaPost;
