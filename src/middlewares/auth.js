import jwt from "jsonwebtoken";

const SECRET_KEY = "secret_key";

export const isAdmin = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(403).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token.split(" ")[1], SECRET_KEY);
    console.log("decoded");
    if ((!decoded ||  decoded.role !== "admin")) {
      res.status(403).json({ message: "Unauthorized" });
    } else {
      next();
    }
  } catch (err) {
    console.error("Error on Auth", err);
    res.status(500).json({ message: err.message });
  }
};

