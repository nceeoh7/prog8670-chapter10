const User = require("../models/User");
const path = require("path");

module.exports = async (req, res) => {
  let user = await User.create(req.body);

  res.redirect("/");
};
