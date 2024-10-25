const {DataTypes} = require('sequelize');
const sequelize = require('../configs/db');

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_la: {
        type: DataTypes.STRING,
        allowNull: false    
    },
    name_en: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
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

module.exports = {
    Product
    }