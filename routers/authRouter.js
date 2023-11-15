const express = require("express")
const authController = require("../controllers/authController")
const router = express.Router();

//la invochiamo in post perchè invio i dati dell'utente da autenticare
router.post("/login", authController.login)

module.exports = router;