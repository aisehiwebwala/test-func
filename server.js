const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port | 3000;

const urlRoute = require("./src/urlRoutes");
const imgRoute = require("./src/imgRoutes");

app.use(express.json());
app.use(cors());
app.use("/url", urlRoute);
app.use("/img", imgRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
