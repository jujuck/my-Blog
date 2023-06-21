require("dotenv").config();
const request = require("supertest");
const app = require("../app");

const allArticlesKey = ["id", "title", "src", "alt"];
const oneArticleKeys = [
  "id",
  "title",
  "src",
  "alt",
  "text",
  "subtitle",
  "resume",
  "tags",
  "author",
];
const fakeArticle = {
  title: "Article de test",
  subtitle: "Subtitle de test",
  resume: "Resume de test",
  text: "Texte de test hyper long pour passer le check de data",
  src: "./dzaedez/dezaedezad.png",
  alt: "Text alternatif de test",
  tags: [
    {
      id: 1,
      label: "Hiking",
    },
  ],
};

describe("Test les routes du controller article", () => {
  let persistantData = {};
  let cookie = "";
  it("should return a reponse to the get route", async () => {
    // requete
    const res = await request(app)
      .get("/articles")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach((article) => {
      allArticlesKey.forEach((keys) => {
        expect(article).toHaveProperty(keys);
      });
    });
  });

  it("should return one article", async () => {
    const res = await request(app)
      .get("/articles/1")
      .expect(200)
      .expect("Content-type", /json/);

    oneArticleKeys.forEach((keys) => {
      expect(res.body).toHaveProperty(keys);
    });

    expect(Array.isArray(res.body.tags)).toBe(true);

    res.body.tags.forEach((tag) => {
      expect(tag).toHaveProperty("id");
      expect(tag).toHaveProperty("label");
    });
  });

  it("Should connect to the user and add an article", async () => {
    const connect = await request(app)
      .post("/login")
      .send({ email: process.env.USER_EMAIL, password: process.env.USER_PWD });

    // eslint-disable-next-line prefer-destructuring
    cookie = connect.headers["set-cookie"][0].split(";")[0];

    const res = await request(app)
      .post("/articles")
      .set("cookie", cookie)
      .send(fakeArticle)
      .expect(201)
      .expect("Content-type", /json/);

    oneArticleKeys.forEach((keys) => {
      expect(res.body).toHaveProperty(keys);
    });

    expect(Array.isArray(res.body.tags)).toBe(true);

    res.body.tags.forEach((tag) => {
      expect(tag).toHaveProperty("id");
      expect(tag).toHaveProperty("label");
    });
    persistantData = res.body;
  });

  it("Should update the article on put route", async () => {
    await request(app)
      .put(`/articles/${persistantData.id}`)
      .send({ ...persistantData, title: "A brand new test title" })
      .expect(204);
  });

  it("Should delete the article on delete route", async () => {
    await request(app).delete(`/articles/${persistantData.id}`).expect(204);
  });
});
