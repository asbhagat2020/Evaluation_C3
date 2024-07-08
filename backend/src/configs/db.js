const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('nem101', 'root', '002266', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
