const Sequelize = require('sequelize');
const config= new Sequelize("plannerapp", "root", "Laflor95", {dialect: 'mariadb'});

module.exports = config;