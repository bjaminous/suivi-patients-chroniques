
require('dotenv').config();
const nodemailer = require('nodemailer');
const logger = require('../utils/logger');

/**
 * Configuration du transporteur email
 */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true', // true pour port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

/**
 * Vérifier la configuration email
 */
const verifyEmailConfig = async () => {
  try {
    await transporter.verify();
    logger.info(' Configuration email vérifiée');
    return true;
  } catch (error) {
    logger.error(' Erreur configuration email:', error);
    return false;
  }
};

module.exports = { transporter, verifyEmailConfig };