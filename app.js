const express = require("express");

const controllers = require("./app/controllers");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Static directory to be served
app.use(express.static('/app/views'));
app.set('views', 'views');
app.set('view engine', 'ejs')


// Routes
// =============================================================
app.use("/", controllers.landingPage);
// app.use("/albums", controllers.albums);
// app.use("/certificates", controllers.certificates);
// app.use("/login", controllers.login);



// Starts the server to begin listening
// =============================================================

app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });