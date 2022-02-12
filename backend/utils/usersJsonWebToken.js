import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY_JWT, { expiresIn: "40d" });
};

export default generateToken;
