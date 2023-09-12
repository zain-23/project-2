import express from "express";
import { createAccount, login } from "../controllers/accountController";

const accountRoutes = express.Router();

accountRoutes.post("/signup", createAccount);
accountRoutes.post("/login", login);

export default accountRoutes;
