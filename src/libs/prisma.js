const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL + "?sslmode=require", // SSL mode require
    },
  },
  log: ["query", "info", "warn", "error"],
});

module.exports = prisma;
