const connection = require('../cofig/dbConnection');

const LandingPage = require('./landingPage.models');
const Albume = require('./albume.models');
const Certificates = require('./certificates.models');
const Login = require('./login.models');


module.exports = {
  landingPage: new LandingPage(connection),
  albume: new Albume(connection),
  certificates : new Certificates(connection),
  login : new Login(connection),
  
  }