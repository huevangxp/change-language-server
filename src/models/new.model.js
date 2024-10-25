const {DataTypes} = require("sequelize");
const sequelize = require("../configs/db");

const New = sequelize.define("new", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title_la: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title_en: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description_la: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description_en: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = New