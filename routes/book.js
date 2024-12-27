const express = require('express');
const {getCreateBook, getBook, postCreateBook} = require('../controllers/book');

const route = express.Router();

route.get('/book', getBook);

route.get('/createBook', getCreateBook);

route.post('/createBook', postCreateBook);

module.exports = route;

