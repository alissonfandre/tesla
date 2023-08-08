const sequelize = require("sequelize");
const dotenv = require('dotenv');
dotenv.config(); //pega todas configurações do .env

const db = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
    }
);

module.exports = db