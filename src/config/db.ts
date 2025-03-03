import { Sequelize } from "sequelize-typescript";
import config from "./config";

const db = new Sequelize(config.dbConfig.url, {
    dialect: 'mysql',
    models: [__dirname + '/../models/**/*.ts']
});

export default db;
