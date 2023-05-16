import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import connexion from "@services/connexion";

const articleModel = {
  id: null,
  title: "",
  subtitle: "",
  resume: "",
  text: "",
  src: "",
  alt: "",
  tags: [],
};

function ArticlesAdmin() {
  const [tags, setTags] = useState([]);
  const [article, setArticle] = useState(articleModel);
  const [articlesToUpdate, setArticlesToUpdate] = useState([]);

  const getArticleToUpdate = async (event) => {
    event.preventDefault();
    const articleData = await connexion.get(`/articles/${event.target.value}`);
    try {
      if (articleData) {
        setArticle(articleData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getArticles = async () => {
    const articlesData = await connexion.get("/articles");
    try {
      if (articlesData) {
        setArticlesToUpdate(articlesData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleArticle = (name, value) => {
    if (name === "tags") {
      if (article.tags.some((tag) => tag.id === value.id)) {
        setArticle({
          ...article,
          tags: article.tags.filter((tag) => tag.id !== +value.id),
        });
      } else {
        setArticle({ ...article, tags: [...article.tags, value] });
      }
    } else {
      setArticle({ ...article, [name]: value });
    }
  };

  const postArticle = async () => {
    try {
      const articleData = await connexion.post("/articles", article);
      setArticle(articleData);
      getArticles();
      toast.success(`🦄 Article ajouté`);
    } catch (error) {
      console.error(error);
      toast.error(`Une erreur est survenu`);
    }
  };

  const updateArticle = async () => {
    try {
      await connexion.put(`/articles/${article.id}`, article);
      toast.success(`🦄 Article mis à jour`);
    } catch (error) {
      console.error(error);
      toast.error(`Une erreur est survenu`);
    }
  };

  const manageArticle = (event) => {
    event.preventDefault();
    if (article.id) {
      updateArticle();
    } else {
      postArticle();
    }
  };

  const deleteArticle = async (event) => {
    event.preventDefault();
    try {
      await connexion.delete(`/articles/${article.id}`);
      setArticle(articleModel);
      setArticlesToUpdate(
        articlesToUpdate.filter((art) => art.id !== article.id)
      );
      toast.success(`🦄 Article supprimé`);
    } catch (error) {
      console.error(error);
      toast.error(`Une erreur est survenu`);
    }
  };

  const getTags = async () => {
    const tagsData = await connexion.get("/tags");
    try {
      if (tagsData) {
        setTags(tagsData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTags();
    getArticles();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <label htmlFor="article" className="mx-2 px-4">
          Modifie un article
          <select
            name="article"
            id="article"
            onChange={(e) => getArticleToUpdate(e)}
          >
            <option value="none">Rafraichir</option>
            {articlesToUpdate.map((art) => (
              <option key={art.id} value={art.id}>
                {art.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <form onSubmit={manageArticle} className="row mx-auto">
        <div className="form-group">
          <label>
            Titre
            <input
              className="form-control"
              type="text"
              required
              minLength={1}
              maxLength={255}
              value={article.title}
              name="title"
              onChange={(event) =>
                handleArticle(event.target.name, event.target.value)
              }
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Sous titre
            <input
              className="form-control"
              type="text"
              required
              minLength={1}
              maxLength={255}
              value={article.subtitle}
              name="subtitle"
              onChange={(event) =>
                handleArticle(event.target.name, event.target.value)
              }
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Résumé
            <textarea
              className="form-control"
              required
              minLength={1}
              value={article.resume}
              name="resume"
              onChange={(event) =>
                handleArticle(event.target.name, event.target.value)
              }
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Texte
            <textarea
              className="form-control"
              required
              minLength={1}
              value={article.text}
              name="text"
              onChange={(event) =>
                handleArticle(event.target.name, event.target.value)
              }
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Lien de l'image
            <input
              type="url"
              className="form-control"
              required
              maxLength={255}
              value={article.src}
              name="src"
              onChange={(event) =>
                handleArticle(event.target.name, event.target.value)
              }
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Texte alternatif
            <input
              type="text"
              className="form-control"
              required
              maxLength={255}
              minLength={1}
              value={article.alt}
              name="alt"
              onChange={(event) =>
                handleArticle(event.target.name, event.target.value)
              }
            />
          </label>
        </div>
        <div className="from-group">
          {tags.map((tag) => (
            <button
              type="button"
              key={tag.id}
              className={
                article.tags.some((t) => t.id === tag.id)
                  ? "m-2 border p-2 rounded bg-secondary text-white"
                  : "m-2 border p-2 rounded"
              }
              onClick={() => handleArticle("tags", tag)}
            >
              {tag.label}
            </button>
          ))}
        </div>
        {!article.id && (
          <div className="row">
            <button type="submit" className="btn btn-secondary col-5 m-2">
              Valider
            </button>
            <button
              type="button"
              className="btn btn-secondary col-5 m-2"
              onClick={(e) => {
                e.preventDefault();
                setArticle(articleModel);
              }}
            >
              Annuler
            </button>
          </div>
        )}
        {article.id && (
          <div className="row">
            <button type="submit" className="btn btn-secondary col-3 m-2">
              Modifier
            </button>
            <button
              type="button"
              onClick={(e) => deleteArticle(e)}
              className="btn btn-secondary col-3 m-2"
            >
              Supprimer
            </button>
            <button
              type="button"
              className="btn btn-secondary col-3 m-2"
              onClick={(e) => {
                e.preventDefault();
                setArticle(articleModel);
              }}
            >
              Annuler
            </button>
          </div>
        )}
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ArticlesAdmin;

/**
 * title
 * subtitle
 * resume
 * text
 * author => admin en auto
 * id en auto
 * images
 *  text alt
 * tags => select depuis la BDD
 */
