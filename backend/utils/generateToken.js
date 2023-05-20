require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    //secure:process.env.NODE_ENV !== development,
    sameSite: "strict",
    maxAge: 30 * 24 * 24 * 1000,
  });
};

module.exports = generateToken;
