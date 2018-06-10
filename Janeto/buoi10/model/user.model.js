var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String
    },
    pass: {
        type: String,
        required: true
    }
})
userSchema.index({email: 1}, {unique: true})
const User = mongoose.model('ohre', userSchema, 'user')
module.exports = User