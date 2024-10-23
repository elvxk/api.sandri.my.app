const { findProjects } = require("./project.repository");

const getAllProjects = async () => {
  const projects = await findProjects();
  return projects;
};

module.exports = {
  getAllProjects,
};
