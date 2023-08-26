var jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  var token = req.header("token");
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    var decoded = jwt.verify(token, "randomString");
    req.user = decoded.user;
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};
