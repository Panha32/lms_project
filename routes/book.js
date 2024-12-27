const express = require('express');
const {getCreateBook, getBook, postCreateBook, getDeleteBook, getEditBook, postEditBook} = require('../controllers/book');

const route = express.Router();

// get book page
route.get('/book', getBook);

// create book
route.get('/createBook', getCreateBook);
route.post('/createBook', postCreateBook);

// delete book
route.get('/deleteBook/:bookID', getDeleteBook);

// edit book
route.get('/editBook/:bookID', getEditBook);
route.post('/editBook', postEditBook);

module.exports = route;

