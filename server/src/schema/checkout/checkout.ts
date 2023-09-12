import mongoose from "mongoose";

const checkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cotegory: { type: String, required: true },
  content: { type: String, required: true },
});

const checkout = mongoose.model("checkout", checkSchema);

export default checkout;
