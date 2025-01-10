const jwt = require('jsonwebtoken');
const con = require('../config/db');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if(token) {
        jwt.verify(token, 'panhajs', (err, decodedToken) => {
            if(err) {
                res.locals.user = null;
                res.redirect('/login');
            } else {
                // console.log(decodedToken);
                next();
            }
        });
    } else {
        res.redirect('/login');
    }
}

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if(token) {
        jwt.verify(token, 'panhajs', (err, decodedToken) => {
            if(err) {
                res.redirect('/login');
            } else {
                const sql = "SELECT userID, CONCAT(firstName, ' ', lastName) AS fullName, email FROM user WHERE userID = ?";
                con.query(sql, decodedToken.id, (err, data) => {
                    if (err) {
                        console.log(err);
                        res.locals.user = null;
                    } else {
                        res.locals.user = data;
                    }
                    next();
                });
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
}

module.exports = {
    requireAuth, checkUser
}