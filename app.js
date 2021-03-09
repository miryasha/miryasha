const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', 'views');
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('landing_page')
});


// Starts the server to begin listening
// =============================================================

app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });