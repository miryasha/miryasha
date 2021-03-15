const express = require("express");

const controllers = require("./app/controllers");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function passwordProtected(req, res, next){
  res.set('WWW-Authenticate','Basic realm="Dash Board"')
  //console.log(req.headers.authorization)
  
  if (req.headers.authorization == "Basic SkVUWTQ1NzYzJCMmKiMlWUhodmZKREZTRmRndnNkZnNHYTMzNTR5NjQ1Oj8iTExLUEZQR1NkZmdwbzQ5cTh3ZXBxazc4XiUkJCMjZmd1Jmlsbm1LTEs=") {
    next()

  }else{
    res.status(401).send("Authentication required")
  }
}

app.use(passwordProtected)

// Static directory to be served
app.use(express.static("./app/public"));



// Routes
// =============================================================
app.use("/", controllers.landingPage);
app.use("/albums", controllers.albums);
app.use("/certificates", controllers.certificates);
app.use("/login", controllers.login);



// Starts the server to begin listening
// =============================================================

app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });