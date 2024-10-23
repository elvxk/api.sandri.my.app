const express = require("express");
const prisma = require("../libs/prisma");
const { getAllProjects } = require("./project.service");

const router = express.Router();

router.get("/", async (req, res) => {
  const projects = await getAllProjects();
  res.status(200).send({ message: "success", data: projects });
});

module.exports = router;
