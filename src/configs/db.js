const Sequelize = require("sequelize");

const sequelize = new Sequelize('change-language', 'postgres', 'huevangxp', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    port: 5432,
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

    sequelize.sync({ force: false });

module.exports = sequelize