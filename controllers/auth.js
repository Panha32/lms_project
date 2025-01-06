const con = require('../config/db');

const login = (req, res) => {
    res.render('auth/login');
}

const register = (req, res) => {
    res.render('auth/register');
}

const forgotPassword = (req, res) => {
    res.render('auth/forgot-password');
}

module.exports = {
    login, register, forgotPassword
}