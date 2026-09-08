require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const API_KEY = process.env.NEWS_API_KEY;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/noticias", async (req, res) => {
  try {
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(response.status).json({ error: "Error al consultar NewsAPI" });
    }

    const data = await response.json();
    res.json(data.articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});