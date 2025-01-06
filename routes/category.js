const express = require('express');
const {getCreateCategory, getCategory, postCreateCategory, getDeleteCategory, getEditCategory, postEditCategory} = require('../controllers/category');

const router = express.Router();

// get category page
router.get('/category', getCategory);

// create category
router.get('/createCategory', getCreateCategory);
router.post('/createCategory', postCreateCategory);

// delete category
router.get('/deleteCategory/:categoryID', getDeleteCategory);

// edit category
router.get('/editCategory/:categoryID', getEditCategory);
router.post('/editCategory', postEditCategory);

module.exports = router;

