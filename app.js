const express = require('express');
const routeBook = require('./routes/book');
const routeAuthor = require('./routes/author');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/index', (req, res) => {
    res.render('index');
})

app.get('/tables', (req, res) => {
    res.render('tables');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.use(routeBook);
app.use(routeAuthor);

app.listen(3000);