var User = require("../model/user.model")

const create = (model)=> {
    return (new User(model))
}

module.exports = {
    create
}
