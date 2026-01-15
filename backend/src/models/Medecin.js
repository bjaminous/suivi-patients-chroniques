const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Medecin = sequelize.define('Medecin', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  specialite: {
    type: DataTypes.STRING(100)
  },
  numero_ordre: {
    type: DataTypes.STRING(50),
    unique: true
  }
}, {
  tableName: 'medecins',
  timestamps: false
});

module.exports = Medecin;