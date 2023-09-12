import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWTSECRETKEY = "JWTSECRETKEY";
const requireAuth = (req: Request, res: Response) => {
  const token = req.cookies.adminTokeb;
  if (token) {
    jwt.verify(token, JWTSECRETKEY, (err: any, decoded: any) => {
      if (err) {
        res.redirect("/login");
      }
    });
  } else {
    res.redirect("/login");
  }
};

export { requireAuth };
