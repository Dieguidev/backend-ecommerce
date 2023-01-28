//importamos nodemailer

const nodemailer = require('nodemailer');
//contraseñade aplicacion
require('dotenv').config();

//creamos nuestro transportador

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: '465',
  secure: true,
  auth: {
    user: 'diegogaraycullas@gmail.com',
    pass: process.env.G_PASSWORD,
  },
});

module.exports = transporter;