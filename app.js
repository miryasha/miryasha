const express = require('express');
const app = express();

app.set('views', 'views');
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('landing_page')
});


app.listen(3000);