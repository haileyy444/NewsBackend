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

  let url = `https://newsapi.org/v2/everything?apiKey=YOUR_API_KEY&pageSize=30`;
  if (category) {
    url = `https://newsapi.org/v2/top-headlines?apiKey=YOUR_API_KEY&category=${category}&pageSize=30`;
  } else if (query) {
    url += `&q=${encodeURIComponent(query)}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});