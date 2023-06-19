// const models = require("../models");
const { hashPassword, checkPassword } = require("../services/auth");
const models = require("../models");
const { createJwt } = require("../services/jwt");

const signup = async (req, res) => {
  // Encrypté le pmot de passe
  const hash = await hashPassword(req.body.password);
  models.users
    .insert(req.body.email, hash)
    .then(() => res.status(200).json({ msg: "User created" }))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ msg: "Invalid user" });
    });
};

const login = async (req, res) => {
  // 1ère étape : vérification des données du req.body
  const [user] = await models.users.findOne(req.body.email);
  // 2ème étape : Vérifier si l'email est bon et si mot de passe correspond
  if (
    user[0] &&
    (await checkPassword(user[0].encrypt_pwd, req.body.password))
  ) {
    // equivaut à user
    const token = createJwt({ email: req.body.email, role: "admin" });

    res
      .status(200)
      .cookie("blog_token", token, {
        httpOnly: true,
      })
      .json({ msg: "Connected" });
  } else {
    res.status(401).json({ msg: "Wrong credentials" });
  }
};

module.exports = {
  login,
  signup,
};
