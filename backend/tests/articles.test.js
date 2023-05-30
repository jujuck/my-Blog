const request = require("supertest");
const app = require("../src/app");

const articlesKeys = ["id", "title", "src", "alt"];
const articleFullKeys = [
  "id",
  "title",
  "subtitle",
  "resume",
  "src",
  "tags",
  "alt",
];

const fakeArticle = {
  title: "Un super titre de démo",
  subtitle: "Les services, ouah !!!!!!!!!!!!!!!!!!!!",
  text: "vstrgrsdtyhytdhftyujfu",
  resume: "Trop bien cette restructuration et le then",
  src: "https://media.istockphoto.com/id/1279694335/fr/photo/for%C3%AAt-de-pins-et-monatins-le-long-du-sentier-de-la-rivi%C3%A8re-borosa.jpg?s=612x612&w=0&k=20&c=dTMAWQAIFdO45QJOlx7R2l-1VU7FQ9KRHW_pghPTjLg=",
  alt: "dezadezarezf",
  tags: [
    {
      id: 1,
      label: "Hiking",
    },
  ],
};

describe("Test the root path", () => {
  let createdArticle = {};

  it("It should response the Get All articles", async () => {
    const res = await request(app)
      .get("/articles")
      .expect(200)
      .expect("Content-Type", /json/);

    // Test si le résultat est un tableau
    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach((article) => {
      articlesKeys.forEach((keys) => {
        expect(article).toHaveProperty(keys);
      });
    });
  });

  it("It should response the Get One article", async () => {
    const res = await request(app)
      .get("/articles/1")
      .expect(200)
      .expect("Content-Type", /json/);

    articleFullKeys.forEach((keys) => {
      expect(res.body).toHaveProperty(keys);
    });
  });

  it("It should create a new article on POST", async () => {
    const res = await request(app)
      .post("/articles")
      .send(fakeArticle)
      .expect(201)
      .expect("Content-Type", /json/);

    articleFullKeys.forEach((prop) => {
      expect(res.body).toHaveProperty(prop);
    });

    createdArticle = res.body;
  });

  it("It should update a new article on PUT", async () => {
    await request(app)
      .put(`/articles/${createdArticle.id}`)
      .send({ ...createdArticle, title: "A brand new title" })
      .expect(204);

    const res = await request(app)
      .get(`/articles/${createdArticle.id}`)
      .expect(200)
      .expect("Content-Type", /json/);

    articleFullKeys.forEach((keys) => {
      expect(res.body).toHaveProperty(keys);
    });
    expect(res.body).toHaveProperty("title", "A brand new title");

    createdArticle.title = "A brand new title";
  });

  it("It should delete the created article on DELETE", async () => {
    await request(app).delete(`/articles/${createdArticle.id}`).expect(204);

    await request(app).get(`/articles/${createdArticle.id}`).expect(404);

    createdArticle = {};
  });
});
