const express = require("express");
const { getAllProjects } = require("./project.service");

const router = express.Router();

router.get("/", async (req, res) => {
  const projects = await getAllProjects();
  res.status(200).send({ message: "success", data: projects });
});

router.get("/test", (req, res) => {
  res.status(200).send({ message: "success from project test" });
});

module.exports = router;
