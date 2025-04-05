"use strict";

const app = require("./app");
const { PORT } = require("./config");

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});


// server.js or your backend route
app.get("/api/news", async (req, res) => {
  const category = req.query.category || "";
  const query = req.query.q || "";

  let url = `https://newsapi.org/v2/everything?apiKey=256902348cbe42fa9b609a8dd8f44cb6&pageSize=30`;
  if (category) {
    url = `https://newsapi.org/v2/top-headlines?apiKey=256902348cbe42fa9b609a8dd8f44cb6&category=${category}&pageSize=30`;
  } else if (query) {
    url += `&q=${encodeURIComponent(query)}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});