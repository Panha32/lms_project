const express = require('express');
const {getCreateBook, getBook, postCreateBook, getDeleteBook, getEditBook, postEditBook} = require('../controllers/book');

const router = express.Router();

// get book page
router.get('/book', getBook);

// create book
router.get('/createBook', getCreateBook);
router.post('/createBook', postCreateBook);

// delete book
router.get('/deleteBook/:bookID', getDeleteBook);

// edit book
router.get('/editBook/:bookID', getEditBook);
router.post('/editBook', postEditBook);

module.exports = router;

