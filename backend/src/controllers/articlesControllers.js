const models = require("../models");
const articleSchema = require("../services/article");

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

const edit = async (req, res) => {
  const article = req.body;

  // TODO validations (length, format...)

  article.id = parseInt(req.params.id, 10);
  try {
    const { error } = articleSchema("optional").validate(article, {
      abortEarly: false,
    });
    if (error) throw new Error(error);
    await models.images.update(article.src, article.alt, article.id);
    await models.articles.update(article);
    await models.articleToTags.delete(article.id);
    await models.articleToTags.insert(article.id, article.tags);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const add = async (req, res) => {
  const article = req.body;

  try {
    const { error } = articleSchema("required").validate(article, {
      abortEarly: false,
    });
    if (error) throw new Error(error);

    const image = await models.images.insert(article.src, article.alt);
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
          .json({ ...article, id: articleCreated[0].insertId });
      }
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const destroy = async (req, res) => {
  const articleToTags = await models.articleToTags.delete(req.params.id);
  try {
    if (articleToTags[0].affectedRows > 0) {
      const articleToDelete = await models.articles.delete(req.params.id);
      if (articleToDelete[0].affectedRows === 1) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
