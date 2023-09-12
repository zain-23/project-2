import mongoose from "mongoose";

export function connectToMongoDB() {
  const dbURI =
    "mongodb+srv://zaynshah397:11111@cluster0.m3nkm90.mongodb.net/test";

  const options: any = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(dbURI, options);

  const dbConnection = mongoose.connection;

  dbConnection.on("connected", () => {
    console.log("MongoDB connected");
  });

  dbConnection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });

  dbConnection.on("disconnected", () => {
    console.log("MongoDB disconnected");
  });

  process.on("SIGINT", async () => {
    await dbConnection.close();
    console.log("MongoDB connection closed through app termination");
    process.exit(0);
  });
}