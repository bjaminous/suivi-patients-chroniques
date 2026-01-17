require('dotenv').config();

module.exports = {
  // Secret pour les tokens d'accès
  secret: process.env.JWT_SECRET || 'default_secret_CHANGE_IN_PRODUCTION',
  
  // Durée de validité du token d'accès
  expiresIn: process.env.JWT_EXPIRE || '1h',
  
  // Secret pour les refresh tokens
  refreshSecret: process.env.JWT_REFRESH_SECRET || 'default_refresh_secret_CHANGE',
  
  // Durée de validité du refresh token
  refreshExpiresIn: process.env.JWT_REFRESH_EXPIRE || '7d',
  
  // Algorithme de signature
  algorithm: 'HS256'
};