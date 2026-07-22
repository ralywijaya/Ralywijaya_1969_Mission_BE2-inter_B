const express = require("express");
const router = express.Router();

const {tambahMovie,ambilMovie,ambilMovieID,ubahMovie,hapusMovie}=require("../controllers/movie.controller")


router.get("/",ambilMovie)
router.get("/:id",ambilMovieID)
router.post("/",tambahMovie)
router.patch("/:id",ubahMovie)
router.delete("/:id",hapusMovie)


module.exports=router