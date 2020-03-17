const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

//User Model
//So that we can make eloquent queries
const User = require("../../models/User");

//creating some Routes
//@Route POST api/users
//@desc Register new User
// @access Public

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
      if (err) throw err;
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        //call backs in javascript
        newUser.save().then(user => {
          //creating the token
          //jwt parameters
          jwt.sign(
            {
              id: user.id,
              name: user.name
            },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
