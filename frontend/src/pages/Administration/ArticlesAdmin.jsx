import React, { useEffect, useState } from "react";
import connexion from "@services/connexion";

function ArticlesAdmin() {
  const [tags, setTags] = useState([]);

  const manageArticle = (event) => {
    event.preventDefault();
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
      <form onSubmit={manageArticle} className="">
        <div className="form-group">
          <label>
            Titre
            <input
              className="form-control"
              type="text"
              required
              maxLength={255}
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
              maxLength={255}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Résumé
            <textarea className="form-control" required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Texte
            <textarea className="form-control" required />
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
            />
          </label>
        </div>
        <div className="from-group">
          <select>
            {tags.map((tag) => (
              <option value={tag.id}>{tag.label}</option>
            ))}
          </select>
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
