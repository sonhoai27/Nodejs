var mongoose = require('mongoose');

const connectDB = ()=> {
    mongoose.connect('mongodb://localhost:27017/ohre');
}
module.exports = {
    connectDB
}
