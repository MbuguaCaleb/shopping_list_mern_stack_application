const config = require("config");
const jwt = require("jsonwebtoken");

//Middleware function

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  //check for token
  if (!token) res.status(401).json({ msg: "No token, authorization denied" });

  //if token found

  try {
    //verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    //Unisigning the token brings in the ID which was used during token signIn
    req.user = decoded;

    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}

module.exports = auth;
