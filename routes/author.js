const express = require('express');
const {getCreateAuthor, getAuthor, postCreateAuthor, getDeleteAuthor, getEditAuthor, postEditAuthor} = require('../controllers/author');

const route = express.Router();

// get author page
route.get('/author', getAuthor);

// create author
route.get('/createAuthor', getCreateAuthor);
route.post('/createAuthor', postCreateAuthor);

// delete author
route.get('/deleteAuthor/:authorID', getDeleteAuthor);

// edit author
route.get('/editAuthor/:authorID', getEditAuthor);
route.post('/editAuthor', postEditAuthor);

module.exports = route;

