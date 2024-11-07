const {DataTypes} = require("sequelize");
const sequelize = require("../configs/db");

const Language = sequelize.define("language", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    en: {
        type: DataTypes.STRING,
        allowNull: false
    },
    la: {
        type: DataTypes.STRING,
        allowNull: false
    }
}); 

module.exports = Language;
 