import jwt from "jsonwebtoken";
import config from "../config.js";


export const generateToken = (ID) => {
  try {
    const expiresIn = 60 * 15; // 15 minutes
    const token = jwt.sign({ ID }, config.JWT_SECRET, {
      expiresIn, // 15 minutes
    });
    return { token, expiresIn };
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const generateRefreshToken = (ID, res) => {
  try {
    const expiresIn = 60 * 60 * 24 * 30; // 30 days
    const token = jwt.sign({ ID }, config.JWT_REFRESH, {
      expiresIn, // 30 days
    });
    res.cookie("refreshToken", token, {
      httpOnly: true,
      maxAge: new Date(Date.now() + expiresIn * 1000),
      secure: !config.IS_DEV,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const tokenVerificationErrors = {
  "invalid signature": "Invalid token signature",
  "jwt malformed": "Malformed token",
  "jwt expired": "Token expired",
  "jwt not active": "Token not active",
  "jwt payload is invalid": "Invalid token payload",
  "jwt signature is required": "Token signature is required",
  "Token not found": "Token not found",
};

