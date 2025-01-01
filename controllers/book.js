const con = require('../config/db');
const vBook = require('../validation/book');
const fs = require('fs');

const getBook = (req, res) => {
    con.query("SELECT * FROM tbl_book", (err, data) => {
        res.render('book/tbl_book', {data: data});
    })
}

const getCreateBook = (req, res) => {
    res.render('book/frmCreateBook');
}

const postCreateBook = (req, res) => {
    let sampleFileName = 'default.png';

    const {error, value} = vBook(req.body);
    if(error) {
        res.send(error);
        return;
    }

    if(req.files) {
        let sampleFile = req.files.avatar;
        sampleFileName = Date.now() + sampleFile.name;
        let uploadPath = './public/upload/' + sampleFileName;

        sampleFile.mv(uploadPath, err => {
            err ? console.log(err) : console.log('File uploaded successfully');
        })
    }

    const body = req.body;
    const sql = "INSERT INTO `tbl_book`(`name`, `authorID`, `categoryID`, `avatar`) VALUES (?, ?, ?, ?)";
    const arrData = [body.name, 0, 0, sampleFileName];
    con.query(sql, arrData, (err, data) => {
        err ? console.log(err) : res.redirect('/book');
    })
}

const getDeleteBook = (req, res) => {
    const bookID = req.params.bookID;

    con.query("SELECT avatar FROM tbl_book WHERE bookID = ?", bookID, (err, data) => {
        if(err) {
            console.log(err);
        }
        const avatarName =  data[0].avatar;
        if(avatarName != 'default.png') {
            fs.unlinkSync('./public/upload/' + avatarName);
        }
    })

    con.query("DELETE FROM tbl_book WHERE bookID = ?", bookID, (err, data) => {
        res.redirect('/book');
    })
}

const getEditBook = (req, res) => {
    con.query("SELECT * FROM tbl_book WHERE bookID = ?", req.params.bookID, (err, data) => {
        res.render('book/frmEditBook', {data});
    })
}

const postEditBook = (req, res) => {
    // console.log(req.body);
    // console.log(req.files);
    let body = req.body;
    let file;

    if(!req.files) {
        file = body.old_avatar;
    } else {
        let sampleFile = req.files.avatar;
        let sampleFileName = Date.now() + sampleFile.name;
        let uploadPath = './public/upload/' + sampleFileName;

        sampleFile.mv(uploadPath, err => {
            if(err) {
                console.log(err);
            }
            if(body.old_avatar != 'default.png') {
                fs.unlinkSync('./public/upload/' + body.old_avatar);
            }
        })
        file = sampleFileName;
    }

    const sql = "UPDATE tbl_book SET name = ?, authorID = ?, categoryID = ?, avatar = ? WHERE bookID = ?";
    const arrData = [body.name, 0, 0, file, body.bookID];
    con.query(sql, arrData, (err, data) => {
        err ? console.log(err) : res.redirect('/book');
    })
}

module.exports = {
    getCreateBook, getBook, postCreateBook, getDeleteBook, getEditBook, postEditBook
}