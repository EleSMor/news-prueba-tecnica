const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const db = require('./db');
const app = express();

// Routes
const indexRoutes = require('./routes/index.routes');
const newsRoutes = require('./routes/news.routes');

db.connect();

const PORT = process.env.PORT || 3500;
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    return next();
});

app.use(express.json());

app.use('/', indexRoutes);
app.use('/news', newsRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});