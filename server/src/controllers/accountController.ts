import { Request, Response } from "express";
import accountSchemaPost from "../schema/account/accountSchema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWTSECRETKEY = "JWTSECRETKEY";
const createAccount = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newadmin = new accountSchemaPost({
      username,
      email,
      password: hashedPassword,
    });

    const savedadmin = await newadmin.save();
    const token = jwt.sign(
      { email: savedadmin.email, id: savedadmin._id },
      JWTSECRETKEY
    );
    res.status(201).json({ admin: savedadmin, token: token });
  } catch (error) {
    throw new Error("Failed to create account");
  }
};

const login = async (req: Request, res: Response) => {
  const expire = Math.floor(Date.now() / 1000) + 10;
  const { email, password } = req.body;

  try {
    const existingUser = await accountSchemaPost.findOne({
      email: email,
    });
    if (!existingUser) {
      return res.status(201).json({ message: "User not found" });
    }
    const matchPassword = await bcrypt.compare(
      password,
      existingUser?.password || ""
    );
    if (!matchPassword) {
      return res.status(201).json({ message: "Incorrect Password" });
    }

    const token = jwt.sign(
      { email: existingUser?.email, id: existingUser?._id },
      JWTSECRETKEY,
      {
        expiresIn: expire,
      }
    );

    res.cookie("jwt", token, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    });

    res.status(201).json({ admin: existingUser, token: token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
export { login, createAccount };
