const express = require("express");
const router = express.Router();

//User Model
//So that we can make eloquent queries
const User = require("../../models/User");

//create some Routes

// @Route GET api/items
//@desc GET All Items
//@access Public
router.get("/", (req, res) => {
  res.send("register");
});

module.exports = router;
