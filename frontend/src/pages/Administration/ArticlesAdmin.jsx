import React, { useEffect, useState } from "react";
import connexion from "@services/connexion";

function ArticlesAdmin() {
  const [tags, setTags] = useState([]);
  const [article, setArticle] = useState({
    id: null,
    title: "",
    subtitle: "",
    resume: "",
    text: "",
    src: "",
    alt: "",
    tags: [],
  });

  const updateArticle = (name, value) => {
    if (name === "tags") {
      if (article.tags.includes(value)) {
        setArticle({
          ...article,
          tags: article.tags.filter((tag) => tag !== +value),
        });
      } else {
        setArticle({ ...article, tags: [...article.tags, value] });
      }
    } else {
      setArticle({ ...article, [name]: value });
    }
  };

  const manageArticle = (event) => {
    event.preventDefault();
    console.info(article);
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
  }, []);

  return (
    <div>
      <form onSubmit={manageArticle} className="w-100 mx-auto">
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
                updateArticle(event.target.name, event.target.value)
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
                updateArticle(event.target.name, event.target.value)
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
                updateArticle(event.target.name, event.target.value)
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
                updateArticle(event.target.name, event.target.value)
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
                updateArticle(event.target.name, event.target.value)
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
                updateArticle(event.target.name, event.target.value)
              }
            />
          </label>
        </div>
        <div className="from-group">
          {tags.map((tag) => (
            <button
              type="button"
              className="m-2 border p-2 rounded"
              onClick={() => updateArticle("tags", tag.id)}
            >
              {tag.label}
            </button>
          ))}
        </div>
        <button type="submit" className="btn btn-secondary">
          Valider
        </button>
      </form>
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
