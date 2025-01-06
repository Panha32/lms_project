const con = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({id}, 'panhajs', {expiresIn: 1 * 24 * 60 * 60});
}

const loginGet = (req, res) => {
    res.render('auth/login');
}

const loginPost = (req, res) => {
    let body = req.body;
    con.query("SELECT * FROM user WHERE email = ?", body.email, async (err, data) => {
        if(err) {
            console.log(err);
        }

        if(data.length == 0) {
            res.send("Invalid Email");
        }

        const comparePassword = await bcrypt.compare(body.password, data[0].password);

        if(comparePassword) {
            const token = generateToken(data[0].userID);
            res.cookie('jwt', token, {maxAge: 3 * 24 * 60 * 60 * 1000, httpOnly: true});
            res.redirect('/index');
        } else {
            res.send("Invalid Password");
        }
    })
}

const registerGet = (req, res) => {
    res.render('auth/register');
}

const registerPost = async (req, res) => {
    let body = req.body;
    let salt = await bcrypt.genSalt();
    let hashPassword = await bcrypt.hash(body.password, salt);
    
    const sql = "INSERT INTO `user`(`firstName`, `lastName`, `email`, `password`, `repeatPassword`) VALUES (?, ?, ?, ?, ?)";
    const arrData = [body.firstName, body.lastName, body.email, hashPassword, hashPassword];
    con.query(sql, arrData, (err, data) => {
        err ? console.log(err) : res.redirect('/index');
    })
}

const forgotPassword = (req, res) => {
    res.render('auth/forgot-password');
}

const logout = (req, res) => {
    res.cookie('jwt', '', {maxAge: 1});
    res.redirect('/login');
}

module.exports = {
    loginGet, loginPost, registerGet, registerPost, forgotPassword, logout
}