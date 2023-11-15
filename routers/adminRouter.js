const express = require("express")
const adminController = require("../controllers/adminController")
const router = express.Router();
const authUserMiddleware = require("../middlewares/authUser");

router.use(authUserMiddleware)
router.get("/", adminController.index)

module.exports = router;