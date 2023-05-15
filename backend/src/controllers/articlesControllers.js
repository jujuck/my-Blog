const models = require("../models");

const browse = (req, res) => {
  models.articles
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.articles
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const articles = req.body;

  // TODO validations (length, format...)

  articles.id = parseInt(req.params.id, 10);

  models.articles
    .update(articles)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = async (req, res) => {
  const article = req.body;

  // TODO validations (length, format...)
  const image = await models.images.insert(article.src, article.alt);

  try {
    if (image[0].affectedRows === 1) {
      const articleCreated = await models.articles.insert(
        article,
        image[0].insertId
      );
      if (articleCreated[0].affectedRows === 1) {
        await models.articleToTags.insert(
          articleCreated[0].insertId,
          article.tags
        );
        res
          .location(`/articles/${articleCreated[0].insertId}`)
          .status(201)
          .json({ id: articleCreated[0].insertId, ...article });
      }
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const destroy = (req, res) => {
  models.articles
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
