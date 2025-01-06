const express = require('express');
const {getCreateAuthor, getAuthor, postCreateAuthor, getDeleteAuthor, getEditAuthor, postEditAuthor} = require('../controllers/author');

const router = express.Router();

// get author page
router.get('/author', getAuthor);

// create author
router.get('/createAuthor', getCreateAuthor);
router.post('/createAuthor', postCreateAuthor);

// delete author
router.get('/deleteAuthor/:authorID', getDeleteAuthor);

// edit author
router.get('/editAuthor/:authorID', getEditAuthor);
router.post('/editAuthor', postEditAuthor);

module.exports = router;

