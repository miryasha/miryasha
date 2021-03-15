const router = require("express").Router();
const path = require("path");

router
.get('/',(req, res) =>{
      res.sendFile(path.join(__dirname, "../views/albums.html"));
})








module.exports = router