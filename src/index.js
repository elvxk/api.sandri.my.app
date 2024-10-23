const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/v1", (req, res) => {
  res.json({ status: "success" });
});

const projectController = require("./project/project.controller");
app.use("/projects", projectController);

app.listen(PORT, () => {
  console.log("Running in PORT " + PORT);
});
