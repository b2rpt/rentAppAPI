const User = require("../models/userModel");
const schema = require("../validation/user");

module.exports = {
  getUser: async (req, res) => {
    return await User.find();
  },

  registerUserData: async (req, res) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let email = await User.findOne({ email: req.body.email });
    if (email)
      return res
        .status(400)
        .json({ ErrorMsg: "This email already registered" });
    let userData = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    return await userData.save();
  },

  updateUserData: async (req, res) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findById(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
      },
      { new: true }
    );
    return await user;
  },

  deleteUser: async (req, res) => {
    let user = await User.findOneAndDelete(req.params.id);
    if (!user) return res.status(400).send("No cook found to delete!");
    return  user;
  },
};
