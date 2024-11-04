const { DataTypes } = require('sequelize');
const sequelize = require('../configs/db');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.JSON,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,  // Decimal for precise currency handling
        allowNull: false
    },
    description: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, {
    tableName: 'products', // Explicitly define the table name
    timestamps: true        // Enable timestamps (optional, depending on your needs)
});

module.exports = Product;
