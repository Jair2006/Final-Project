import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KEY = "secret_key";

export const register = async (body) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(body.password, saltRounds);

  let payload = {
    name: body.name,
    lastname: body.lastname,
    email: body.email,
    password: hashedPassword,
    role: body.role,
  };

  let data = await User.create(payload);
  return data;
};

export const logIn = async (body) => {
  const email = body.email;
  let user = await User.findOne({ where: { email: email } });
  if (!user) {
    throw new Error("Email not found");
  }
  if (await bcrypt.compare(body.password, user.password)) {
    const userInfo = {
      id: user.id,
      name: user.name,
      email: user.email,
      lastname: user.lastname,
      role: user.role,
    };
    const token = jwt.sign(userInfo, SECRET_KEY, { expiresIn: "24h" });
    return { token: token };
  } else {
    throw new Error("Password incorrect");
  }
};

export const updatePassword = async (id, body) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(body.password, saltRounds);
  let payload = {
    password: hashedPassword,
  };
  let data = await User.update(payload, {
    where: { id: id },
  });
  return data;
};
