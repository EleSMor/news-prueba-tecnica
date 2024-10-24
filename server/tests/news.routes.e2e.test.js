const request = require("supertest");
const { setupApp, setupTestDB } = require("./testSetup");

setupTestDB();

const app = setupApp();

describe("News API", () => {
  it("should create a new news item", async () => {
    const newNews = {
      title: "Test News title",
      description: "This is a test news description",
      content: "Test news content",
      author: "Ele",
    };

    const response = await request(app).post("/news").send(newNews).expect(200);

    expect(response.body.title).toBe(newNews.title);
  });

  it("should fetch non archived news items", async () => {
    const newNews = [
      {
        title: "Test News title",
        description: "This is a test news description",
        content: "Test news content",
        author: "Ele",
      },
      {
        title: "Test another news title",
        description: "This is another test news description",
        content: "Test another news content",
        author: "Ele",
      },
    ];

    await request(app).post("/news").send(newNews[0]).expect(200);

    const newsToArchiveCreated = await request(app)
      .post("/news")
      .send(newNews[1])
      .expect(200);

    await request(app)
      .put(`/news/${newsToArchiveCreated.body._id}/archive`)
      .expect(200);

    const response = await request(app).get("/news").expect(200);

    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body[0].title).toBe(newNews[0].title);

    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it("should fetch only archived news items", async () => {
    const newNews = [
      {
        title: "Test News title",
        description: "This is a test news description",
        content: "Test news content",
        author: "Ele",
      },
      {
        title: "Test another news title",
        description: "This is another test news description",
        content: "Test another news content",
        author: "Ele",
      },
    ];

    await request(app).post("/news").send(newNews[0]).expect(200);

    const newsToArchiveCreated = await request(app)
      .post("/news")
      .send(newNews[1])
      .expect(200);

    await request(app)
      .put(`/news/${newsToArchiveCreated.body._id}/archive`)
      .expect(200);

    const response = await request(app).get("/news/archived").expect(200);

    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body[0].title).toBe(newNews[1].title);
  });

  it("should archive news item", async () => {
    const newNews = {
      title: "Test News title",
      description: "This is a test news description",
      content: "Test news content",
      author: "Ele",
    };

    const newNewsresponse = await request(app)
      .post("/news")
      .send(newNews)
      .expect(200);

    const response = await request(app)
      .put(`/news/${newNewsresponse.body._id}/archive`)
      .expect(200);

    expect(response.body._id).toBe(newNewsresponse.body._id);
    expect(response.body.archiveDate).toBeTruthy();
  });

  it("should delete archived news item", async () => {
    const newNews = {
      title: "Test News title",
      description: "This is a test news description",
      content: "Test news content",
      author: "Ele",
    };

    const newNewsresponse = await request(app)
      .post("/news")
      .send(newNews)
      .expect(200);

    const archivedNews = await request(app)
      .put(`/news/${newNewsresponse.body._id}/archive`)
      .expect(200);

    const response = await request(app)
      .delete(`/news/${archivedNews.body._id}`)
      .expect(200);

    expect(response.body).toBe(
      `New with id ${archivedNews.body._id} has been successfully deleted`
    );
  });

  it("should not delete not archived news item", async () => {
    const newNews = {
      title: "Test News title",
      description: "This is a test news description",
      content: "Test news content",
      author: "Ele",
    };

    const newNewsresponse = await request(app)
      .post("/news")
      .send(newNews)
      .expect(200);

    const response = await request(app)
      .delete(`/news/${newNewsresponse.body._id}`)
      .expect(400);

    expect(response.body).toBe(
      `It is not possible to delete new with id ${newNewsresponse.body._id}.`
    );
  });
});
