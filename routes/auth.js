const express = require('express');
const { login, register, forgotPassword } = require('../controllers/auth');

const router = express.Router();

router.get('/login', login);

router.get('/register', register);

router.get('/forgot-password', forgotPassword);

module.exports = router;