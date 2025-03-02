import { Sequelize } from "sequelize-typescript";
import config from "./config";

const db = new Sequelize({
    database: config.dbConfig.database,
    username: config.dbConfig.user,
    password: config.dbConfig.password,
    host: config.dbConfig.host,
    port: parseInt(config.dbConfig.port, 10),
    dialect: 'mysql',
    models: [__dirname + '/../models/**/*.ts']
});

export default db;
