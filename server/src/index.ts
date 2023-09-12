const port = process.env.PORT || 8000;
import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import { connectToMongoDB } from "./config/config";
import blogRoutes from "./routes/blog";
import bodyParser from "body-parser";
import productRoutes from "./routes/productRoute";
import cookieParser from "cookie-parser";
import accountRoutes from "./routes/account";
// import loginRoutes from "./routes/login";
import crypto from "crypto";
import orderRoutes from "./routes/orderRoutes";
//For env File
dotenv.config();
const app: Application = express();
// Parse URL-encoded and JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());

connectToMongoDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.use("/blog", blogRoutes);
app.use("/product", productRoutes);
app.use("/account", accountRoutes);
app.use("/order", orderRoutes);

app.get("/token", (req, res) => {
  const jwtToken = req.cookies.jwt; // Retrieve the httpOnly cookie
  res.json({ token: jwtToken });
});
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
