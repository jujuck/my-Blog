const express = require("express");

const router = express.Router();

const articlesControllers = require("./controllers/articlesControllers");
const tagsControllers = require("./controllers/tagsControllers");

router.get("/articles", articlesControllers.browse);
router.get("/articles/:id", articlesControllers.read);
router.put("/articles/:id", articlesControllers.edit);
router.post("/articles", articlesControllers.add);
router.delete("/articles/:id", articlesControllers.destroy);

router.get("/tags", tagsControllers.browse);

module.exports = router;
