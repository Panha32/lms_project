const express = require('express');
const { loginGet, loginPost, registerGet, registerPost, forgotPassword, logout } = require('../controllers/auth');

const router = express.Router();

router.get('/login', loginGet);
router.post('/login', loginPost);

router.get('/register', registerGet);
router.post('/register', registerPost);

router.get('/forgot-password', forgotPassword);

router.get('/logout', logout);

module.exports = router;