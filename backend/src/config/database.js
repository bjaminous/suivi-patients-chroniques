require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  }
);

// Test de connexion
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données réussie');
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
  }
};

const syncDatabase = async (force = false) => {
  try {
    await sequelize.sync({ force, alter: !force });
    logger.info(`Synchronisation base de données ${force ? '(FORCE)' : ''}réussie`);
  } catch (error) {
    logger.error('Erreur synchronisation base de données:', error);
    throw error;
  }
};

module.exports = { sequelize, testConnection, syncDatabase }