const express = require('express');
const router = express.Router();
const path = require("path");
const data = require("../../data/data")

//@route GET api/data
//@desc get front-end data
//@access Public

router.get("/", (req, res) => {
    res.json(data);
    
})


module.exports = router;

