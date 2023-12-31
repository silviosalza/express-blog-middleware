const express = require("express");
const router = express.Router();
const multer = require("multer")
const postController = require("../controllers/postController");
const authUserMiddleware = require("../middlewares/authUser");

// funzione index

router.get("/" , postController.index)

//funzione create
router.get("/create" , postController.create)

//funzione store
router.post("/", authUserMiddleware , postController.store)

//funzione show
router.get("/:slug", postController.show)

//funzione delete
router.delete("/:slug" , postController.destroy)

//funzione download

router.get("/:slug/download" , postController.downloadImg)



module.exports = router;