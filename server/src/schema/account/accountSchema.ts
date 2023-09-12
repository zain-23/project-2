import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    // Use a regular expression for basic email validation
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email address",
    ],
  },
  password: { type: String, required: true },
});

const accountSchemaPost = mongoose.model("role", accountSchema);

export default accountSchemaPost;
