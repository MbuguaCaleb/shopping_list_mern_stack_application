const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

//User Model
//So that we can make eloquent queries
const User = require("../../models/User");

//@Route POST api/auth
//@desc Auth User
// @access Private

router.post("/", (req, res) => {
  //destructuring
  const { email, password } = req.body;

  //Simple validation
  if (!email || !password) {
    return res.status(400).json({
      msg: "Please enter all fields"
    });
  }

  //check if the user has been registered'
  //remeber that findone is returning a user object
  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User Does not Exist!" });

    //similar to a login route
    //Validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch)
        return res.status(400).json({
          msg: "Invalid credentials"
        });
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

//@Route GET api/auth/user
//@desc GET User
// @access Private

router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});

module.exports = router;
