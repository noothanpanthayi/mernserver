const express=require("express");
const { createAuto, getAutos } = require("./httpMethodActions");
const router=express.Router();


router.post("/", createAuto);
router.get("/", getAutos)


module.exports = router;

