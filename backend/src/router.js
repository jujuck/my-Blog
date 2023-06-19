const express = require("express");

const router = express.Router();

const articlesControllers = require("./controllers/articlesControllers");
const tagsControllers = require("./controllers/tagsControllers");
const authControllers = require("./controllers/authControllers");

const { checkUserData } = require("./services/auth");
const { checkUser } = require("./services/jwt");

router.get("/articles", articlesControllers.browse);
router.get("/articles/:id", articlesControllers.read);
router.put("/articles/:id", checkUser, articlesControllers.edit);
router.post("/articles", checkUser, articlesControllers.add);
router.delete("/articles/:id", checkUser, articlesControllers.destroy);

router.get("/tags", tagsControllers.browse);

router.post("/signup", checkUserData, authControllers.signup);
router.post("/login", checkUserData, authControllers.login);

module.exports = router;
