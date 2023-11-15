const jwt = require("jsonwebtoken")

module.exports = function (req,res,next){

    //leggo il jwt ricevo tramite l'header che mi viene inviato (vedere postman Headers)

    const bearerToken = req.header("Authorization")
    console.log(bearerToken);

    if(!bearerToken){
        return res.status(401).send("Token mancante")
    }

    const token = bearerToken.split(" ")[1];
    console.log(token);

    //controllo validità tramite libreria verify di jwt
    //1. token da verificare 2. chiave segreta 3.eventuali opzioni

    const isValid = jwt.verify(token, process.env.JWT_SECRET)
    console.log(isValid);

    //rispondo


  next() 
}