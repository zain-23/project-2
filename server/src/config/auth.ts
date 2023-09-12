import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWTSECRETKEY = "JWTSECRETKEY";

function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.jwt;
  const secretKey = JWTSECRETKEY; // Use the same secret key as in authMiddleware
  jwt.verify(token, secretKey, (err: jwt.VerifyErrors | null, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: "Please Login" });
    }
    // req.user = decoded.user;
    next();
  });
}

export { verifyToken };
