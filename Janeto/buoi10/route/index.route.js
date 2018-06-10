
module.exports = (app) =>{
    app.use("/api/auth", require('./auth.route'))
    app.use("/api/user", require('./user.route'))
}