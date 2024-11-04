const {DataTypes} = require("sequelize");
const sequelize = require("../configs/db");

const New = sequelize.define("new", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.JSON, // Changed to JSON to hold an object
        allowNull: false
    },
    description: {
        type: DataTypes.JSON, // Changed to JSON to hold an object
        allowNull: false
    }
});

module.exports = New