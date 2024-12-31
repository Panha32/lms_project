const express = require('express');
const fileUpload = require('express-fileupload');
const routeBook = require('./routes/book');
const routeAuthor = require('./routes/author');
const routeCategory = require('./routes/category');

const app = express();
app.use(fileUpload());
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

app.get('/register', (req, res) => {
    res.render('register');
})

app.get('/forgot-password', (req, res) => {
    res.render('forgot-password');
})

app.get('/404', (req, res) => {
    res.render('404');
})

app.get('/blank', (req, res) => {
    res.render('blank');
})

app.use(routeBook);
app.use(routeAuthor);
app.use(routeCategory);

app.listen(3000);