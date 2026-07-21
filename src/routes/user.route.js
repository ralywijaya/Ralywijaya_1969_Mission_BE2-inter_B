const express = require("express");
const router = express.Router();

const {ambilUser,tambahUser,ubahUser,hapusUser}=require("../controllers/user.controller")


router.get("/",ambilUser)
router.post("/",tambahUser)
router.patch("/:id",ubahUser)
router.delete("/:id",hapusUser)


module.exports=router