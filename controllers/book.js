const con = require('../config/db');

const getBook = (req, res) => {
    con.query("SELECT * FROM tbl_book", (err, data) => {
        res.render('book/tbl_book', {data: data});
    })
}

const getCreateBook = (req, res) => {
    res.render('book/frmCreateBook');
}

const postCreateBook = (req, res) => {
    const body = req.body;
    const sql = "INSERT INTO `tbl_book`(`name`, `authorID`, `categoryID`) VALUES (?, ?, ?)";
    const arrData = [body.name, 0, 0];
    con.query(sql, arrData, (err, data) => {
        err ? console.log(err) : res.redirect('/book');
    })
}

const getDeleteBook = (req, res) => {
    con.query("DELETE FROM tbl_book WHERE bookID = ?", req.params.bookID, (err, data) => {
        res.redirect('/book');
    })
}

const getEditBook = (req, res) => {
    con.query("SELECT * FROM tbl_book WHERE bookID = ?", req.params.bookID, (err, data) => {
        res.render('book/frmEditBook', {data});
    })
}

const postEditBook = (req, res) => {
    const body = req.body;
    const sql = "UPDATE tbl_book SET name = ?, authorID = ?, categoryID = ? WHERE bookID = ?";
    const arrData = [body.name, 0, 0, body.bookID];
    con.query(sql, arrData, (err, data) => {
        err ? console.log(err) : res.redirect('/book');
    })
}

module.exports = {
    getCreateBook, getBook, postCreateBook, getDeleteBook, getEditBook, postEditBook
}