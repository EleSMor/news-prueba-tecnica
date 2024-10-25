const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./db");
const cors = require("cors");
const app = express();

// Routes
const indexRoutes = require("./routes/index.routes");
const newsRoutes = require("./routes/news.routes");

db.connect();

const PORT = process.env.PORT || 3500;
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  return next();
});

// Allowed urls CORS
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

const API = "/api";
app.use(`${API}/`, indexRoutes);
app.use(`${API}/news`, newsRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
