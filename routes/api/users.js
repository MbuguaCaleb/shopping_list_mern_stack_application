const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
//User Model
//So that we can make eloquent queries
const User = require("../../models/User");

//creating some Routes

router.post("/", (req, res) => {
  //destructuring
  const { name, email, password } = req.body;

  //Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({
      msg: "Please enter all fields"
    });
  }

  //check if the user already exists!
  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already Exists!" });

    //creating a new User object from the MongoDB Model
    const newUser = new User({ name, email, password });

    //generating a salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        
        //call backs in javascript
        newUser.save().then(user => {
          res.json({
            user: {
              id: user.id,
              name: user.name,
              email: user.email
            }
          });
        });
      });
    });
  });
});

module.exports = router;
