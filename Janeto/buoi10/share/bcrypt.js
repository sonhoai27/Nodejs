const bcrypt = require("bcrypt")

const hashPassBcrypt = (password, defaultSalt) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(defaultSalt, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                if (err) reject(err)
                else resolve(hash)
            });
        });
    })
}

const comparePassBcrypt = (password, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, function(err, res) {
            if (err) reject(false)
            else resolve(res)
        });
    })
}

module.exports = {
    hashPassBcrypt,
    comparePassBcrypt
}