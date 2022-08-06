import { Sequelize } from "sequelize";

const db = new Sequelize("fullstack-multirole", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
