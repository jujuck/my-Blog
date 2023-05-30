// const models = require("../models");

const user = {
  email: "test@test.com",
  password: "WildCodeSchool",
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
};
