const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.send("OK");
});

app.get("/test", (req, res) => {
  res.send("OK");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("App running on port 3000");
});
