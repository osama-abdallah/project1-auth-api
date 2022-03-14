"use strict";

const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const Collection = require('./Collection-class')
const Users = require('./users-model')

const SECRET = process.env.SECRET;

const DATABASE_URL =
  process.env.NODE_ENV == "test" ? "sqlite:memory" : process.env.DATABASE_URL;

let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } } }
    : {};

let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);


let userMod = Users(sequelize, DataTypes);
let userCollect = new Collection(userMod);

module.exports = {
  db: sequelize,
  users: userCollect,
  Users: Users(sequelize, DataTypes)
};
