const express = require('express')
const userDao = require("../model/user.model")
const router = express.Router()
const bcrypt = require('../share/bcrypt')
const { sign } = require("../share/jwt")
router.post("/register", (req, res, next) => {
    var user = req.body
    userDao.findOne({
            email: user.email
        })
        .then((u) => {
            if (u) {
                res.status(200).json({
                    message: user.email + " đã tồn tại"
                })
            } else {
                return bcrypt.hashPassBcrypt(user.pass, 8)
            }
        })
        .then((passHash) => {
            user.pass = passHash
            return userDao.create(user)
        })
        .then((user) => {
            res.status(200).json({
                message: user
            })
        })
        .catch((err) => {
            next(err);
        })
})
router.post("/login", (req, res, next) => {
    var user = req.body
    userDao.findOne({
            email: req.body.email
        })
        .then((u) => {
            return bcrypt.comparePassBcrypt(user.pass, u.pass)
        })
        .then((result_pass) => {
            if (result_pass) {
                return sign({
                    email: user.email
                })
            } else {
                res.status(200).json({
                    status: 200,
                    message: "Thất bại, vui lòng xe lại"
                })
            }
        })
        .then((token) => {
            res.status(200).json({
                status: 200,
                message: "Thành công",
                token: token
            })
        })
        .catch((err) => {
            next(err);
        })
})
module.exports = router