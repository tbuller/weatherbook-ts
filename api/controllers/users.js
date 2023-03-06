const User = require("../models/user");

const UsersController = {
  Create: async (req, res, next) => {
    const { email, password, username } = req.body;
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(409).send("email already in use");
    }
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(409).send("username already taken");
    }
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        res.status(401).json({ message: "server error" });
      } else {
        res.status(200).json({ message: "OK" });
      }
    })
  }
}

module.exports = UsersController;