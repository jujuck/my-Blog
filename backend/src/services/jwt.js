const jwt = require("jsonwebtoken");

const privateKey = "masuperclesecretedefoliequiesttroplongue";

const createJwt = (payload) => {
  return jwt.sign(payload, privateKey, {
    expiresIn: "1h",
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, privateKey);
};

const checkUser = (req, res, next) => {
  if (req.cookies.blog_token) {
    const token = verifyToken(req.cookies.blog_token);
    if (token) {
      next();
    } else {
      res.status(401).json({ msg: "Unauthorized" });
    }
  } else {
    res.status(401).json({ msg: "Unauthorized" });
  }
};

module.exports = { createJwt, checkUser };
