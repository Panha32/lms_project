const con = require('../config/db');


const getBook = (req, res) => {
    con.query("SELECT * FROM tbl_book", (err, data) => {
        res.render('tbl_book', {data: data});
    })
}

const getCreateBook = (req, res) => {
    res.render('frmCreateBook');
}

const postCreateBook = (req, res) => {
    const body = req.body;
    const sql = "INSERT INTO `tbl_book`(`name`, `authorID`, `categoryID`) VALUES (?, ?, ?)";
    const arrData = [body.name, 0, 0];
    con.query(sql, arrData, (err, data) => {
        err ? console.log(err) : res.redirect('/book');
    })
}

module.exports = {
    getCreateBook, getBook, postCreateBook
}