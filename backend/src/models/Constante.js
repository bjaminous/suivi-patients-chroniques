const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Constante = sequelize.define('Constante', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  patient_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM(
      'glycemie', 
      'tension_systolique', 
      'tension_diastolique',
      'frequence_cardiaque', 
      'poids', 
      'temperature', 
      'debit_expiratoire'
    ),
    allowNull: false
  },
  valeur: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  unite: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  date_mesure: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  notes: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'constantes',
  timestamps: false
});

module.exports = Constante;
