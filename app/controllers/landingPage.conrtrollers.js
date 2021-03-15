const router = require("express").Router();
const path = require("path");

router
.get('/',(req, res) =>{
      res.sendFile(path.join(__dirname, "../views/landingPage.html"));
})








module.exports = router