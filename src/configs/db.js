const Sequelize = require("sequelize");

const sequelize = new Sequelize('change-language', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
    }
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    sequelize.sync();

module.exports = sequelize