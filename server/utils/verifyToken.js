import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(403).json("You are not authenticated");
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return res.status(403).json("Token is not valid");
    }
    req.user = user;
    next();
  });
};
