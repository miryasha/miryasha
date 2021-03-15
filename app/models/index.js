const connection = require('../config/db.connnection');
const LandingPage = require('./landingPage.model');
const Albume = require('./albume.model');
const Certificates = require('./certificates.model');
const Login = require('./login.model');


module.exports = {
  landingPage: new LandingPage(connection),
  albume: new Albume(connection),
  certificates : new Certificates(connection),
  login : new Login(connection)
  
  }