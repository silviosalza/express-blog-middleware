const jwt = require("jsonwebtoken")

module.exports = function(user){
//estraggo i dati che voglio salvare nei token, tranne password
    const payload = {
        id: user.id,
        username: user.username,
    }
//alla funzione sign passo payload, la JWT ed un metodo di expire
    return jwt.sign(payload , process.env.JWT_SECRET , {expiresIn: "1h"})

}