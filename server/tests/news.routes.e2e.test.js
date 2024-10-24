const request = require('supertest');
const { setupApp, setupTestDB } = require('./testSetup');

setupTestDB();  

const app = setupApp();

describe('News API', () => {
    
  it('should create a new news item', async () => {
    const newNews = {
      title: 'Test News title',
      description: 'This is a test news description',
      content: 'Test news content',
      author: 'Ele',
    };

    const response = await request(app)
      .post('/news')
      .send(newNews)
      .expect(200); 

    expect(response.body.title).toBe(newNews.title);
  });

  it('should fetch all news items', async () => {
    const response = await request(app)
      .get('/news')
      .expect(200); 
    
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it('should archive news item', async () => {
     const newNews = {
      title: 'Test News title',
      description: 'This is a test news description',
      content: 'Test news content',
      author: 'Ele',
    };

    const newNewsresponse = await request(app)
      .post('/news')
      .send(newNews)
      .expect(200);

    const response = await request(app)
      .put(`/news/${newNewsresponse.body._id}/archive`)
      .expect(200); 

    expect(response.body._id).toBe(newNewsresponse.body._id);
    expect(response.body.archiveDate).toBeTruthy();
  });
});
