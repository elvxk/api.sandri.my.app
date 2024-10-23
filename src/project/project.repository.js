const prisma = require("../libs/prisma");

const findProjects = async () => {
  const projects = await prisma.projects.findMany();
  return projects;
};

module.exports = {
  findProjects,
};
