const express = require('express');
const { connectDB, disconnectDB } = require('./setupTestDB');
const newsRoutes = require('../routes/news.routes');

const setupApp = () => {
  const app = express();
  app.use(express.json());
  app.use('/news', newsRoutes);
  return app;
};

const setupTestDB = () => {
  beforeAll(async () => {
    await connectDB(); 
  });

  afterAll(async () => {
    await disconnectDB();
  });
};

module.exports = { setupApp, setupTestDB };
