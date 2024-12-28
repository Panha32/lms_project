const con = require('../config/db');

const getAuthor = (req, res) => {
    con.query("SELECT * FROM tbl_author", (err, data) => {
        res.render('author/tbl_author', {data: data});
    })
}

const getCreateAuthor = (req, res) => {
    res.render('author/frmCreateAuthor');
}

const postCreateAuthor = (req, res) => {
    const body = req.body;
    const sql = "INSERT INTO `tbl_author`(`name`) VALUES (?)";
    const arrData = [body.name];
    con.query(sql, arrData, (err, data) => {
        err ? console.log(err) : res.redirect('/author');
    })
}

const getDeleteAuthor = (req, res) => {
    con.query("DELETE FROM tbl_author WHERE authorID = ?", req.params.authorID, (err, data) => {
        res.redirect('/author');
    })
}

const getEditAuthor = (req, res) => {
    con.query("SELECT * FROM tbl_author WHERE authorID = ?", req.params.authorID, (err, data) => {
        res.render('author/frmEditAuthor', {data});
    })
}

const postEditAuthor = (req, res) => {
    const body = req.body;
    const sql = "UPDATE tbl_author SET name = ? WHERE authorID = ?";
    const arrData = [body.name, body.authorID];
    con.query(sql, arrData, (err, data) => {
        err ? console.log(err) : res.redirect('/author');
    })
}

module.exports = {
    getCreateAuthor, getAuthor, postCreateAuthor, getDeleteAuthor, getEditAuthor, postEditAuthor
}