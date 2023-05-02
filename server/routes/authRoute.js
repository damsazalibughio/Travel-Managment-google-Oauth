const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const passport = require('passport');

router.get('/login/success', (req, res) => {
    res.status(200).json({
        success:true,
        message:'success',
        user:req.user,
        cookies:req.user
    });
   
})

router.get('/login/fail', (req, res) => {
    res.status(401).json({
        success:false,
        message:'failure',
    });
   
})
// get index
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', { successRedirect: 'http://localhost:3000/dashboard', failureRedirect: '/'})
    );
// router.get('/verify', (req, res) => {
//     if (req.user) console.log(req.user);
//     else console.log('not authorize');
// })
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})
module.exports = router;