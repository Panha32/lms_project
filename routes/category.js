const express = require('express');
const {getCreateCategory, getCategory, postCreateCategory, getDeleteCategory, getEditCategory, postEditCategory} = require('../controllers/category');

const route = express.Router();

// get category page
route.get('/category', getCategory);

// create category
route.get('/createCategory', getCreateCategory);
route.post('/createCategory', postCreateCategory);

// delete category
route.get('/deleteCategory/:categoryID', getDeleteCategory);

// edit category
route.get('/editCategory/:categoryID', getEditCategory);
route.post('/editCategory', postEditCategory);

module.exports = route;

