// const models = require("../models");
const { hashPassword } = require("../services/auth");
const models = require("../models");

const user = {
  email: "test@test.com",
  password: "WildCodeSchool",
};

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

const login = (req, res) => {
  // 1ère étape : vérification des données du req.body
  // 2ème étape : Vérifier si l'email est bon et si mot de passe correspond
  if (user.email === req.body.email && user.password === req.body.password) {
    res.status(200).json({ msg: "Connected" });
  } else {
    res.status(401).json({ msg: "Wrong credentials" });
  }
};

module.exports = {
  login,
  signup,
};
