const jwt = require("jsonwebtoken");
const keys = require("../keys/keys");

async function Authorization(req, res, next) {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  try {
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }
    jwt.verify(token, keys.jwtSecret, function (err, decod) {
      req.user = decod.user.id;
    });
    next();
  } catch (error) {
    res.status(401).send({ msg: "Token is not valid" });
  }
}

module.exports = Authorization;
