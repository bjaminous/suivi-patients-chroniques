const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Patient = sequelize.define('Patient', {
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
  date_naissance: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  telephone: {
    type: DataTypes.STRING(20)
  },
  pathologie: {
    type: DataTypes.ENUM('diabete', 'hypertension', 'asthme', 'autre'),
    allowNull: false
  },
  medecin_id: {
    type: DataTypes.INTEGER
  },
  numero_dossier: {
    type: DataTypes.STRING(50),
    unique: true
  }
}, {
  tableName: 'patients',
  timestamps: false
});

module.exports = Patient;