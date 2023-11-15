const jwt = require("jsonwebtoken")

function generateToken(user){

    const payload = {



    };
//genero il codice crittografato e e lo firmo col JWT SECRET dell'env
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1h"});

}