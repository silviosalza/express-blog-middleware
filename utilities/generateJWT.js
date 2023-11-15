const jwt = require("jsonwebtoken")

module.exports = function(user){

    return jwt.sign(user , process.env.JWT_SECRET , {expiresIn: "1h"})

}