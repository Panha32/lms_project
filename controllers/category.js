const con = require('../config/db');
const vCategory = require('../validation/category');

const getCategory = (req, res) => {
    con.query("SELECT * FROM tbl_category", (err, data) => {
        res.render('category/tbl_category', {data: data});
    })
}

const getCreateCategory = (req, res) => {
    res.render('category/frmCreateCategory');
}

const postCreateCategory = (req, res) => {
    const {error, value} = vCategory(req.body);
    if(error) {
        res.send(error);
        return;
    }

    const body = req.body;
    const sql = "INSERT INTO `tbl_category`(`name`) VALUES (?)";
    const arrData = [body.name];
    con.query(sql, arrData, (err, data) => {
        err ? console.log(err) : res.redirect('/category');
    })
}

const getDeleteCategory = (req, res) => {
    con.query("DELETE FROM tbl_category WHERE categoryID = ?", req.params.categoryID, (err, data) => {
        res.redirect('/category');
    })
}

const getEditCategory = (req, res) => {
    con.query("SELECT * FROM tbl_category WHERE categoryID = ?", req.params.categoryID, (err, data) => {
        res.render('category/frmEditCategory', {data});
    })
}

const postEditCategory = (req, res) => {
    const body = req.body;
    const sql = "UPDATE tbl_category SET name = ? WHERE categoryID = ?";
    const arrData = [body.name, body.categoryID];
    con.query(sql, arrData, (err, data) => {
        err ? console.log(err) : res.redirect('/category');
    })
}

module.exports = {
    getCreateCategory, getCategory, postCreateCategory, getDeleteCategory, getEditCategory, postEditCategory
}