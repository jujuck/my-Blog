const express = require("express");

const router = express.Router();

const articlesControllers = require("./controllers/articlesControllers");

router.get("/articles", articlesControllers.browse);
router.get("/articles/:id", articlesControllers.read);
router.put("/articles/:id", articlesControllers.edit);
router.post("/articles", articlesControllers.add);
router.delete("/articles/:id", articlesControllers.destroy);

module.exports = router;
