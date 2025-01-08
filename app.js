// Imports
const express = require('express');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');

// Route Imports
const routeBook = require('./routes/book');
const routeAuthor = require('./routes/author');
const routeCategory = require('./routes/category');
const routeAuth = require('./routes/auth');
const { requireAuth, checkUser } = require('./middlewares/auth');

// App Configuration
const app = express();

app.use(fileUpload());
app.use(cookieParser());
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

// Global Middleware
app.get('*', checkUser);

// Main Routes
app.get(['/', '/index'], requireAuth, (req, res) => {
    res.render('index');
})

app.get('/tables', requireAuth, (req, res) => {
    res.render('tables');
})

app.get('/404', (req, res) => {
    res.render('404');
})

app.get('/blank', (req, res) => {
    res.render('blank');
})

// Additional Routes
app.use(routeAuth);
app.use(routeBook);
app.use(routeAuthor);
app.use(routeCategory);

// Server Listener
app.listen(3000);