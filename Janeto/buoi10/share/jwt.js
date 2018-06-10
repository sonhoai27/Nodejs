const jwt = require('jsonwebtoken');

const { KEYJWT } = require("./key")

const sign = (obj) => {
    return new Promise((resolve, reject) => {
        jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60,
            data: obj
        }, KEYJWT, (err, data) => {
            if (err) reject(err)
            resolve(data)
        });
    })
}

const verify = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, KEYJWT, (err, decoded) => {
            if (err) reject(err + '')
            resolve(decoded)
        })
    })
}

module.exports = { sign, verify };