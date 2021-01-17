const Item = require("../models/rentItemsModel");
const schema = require("../validation/item");

module.exports = {
  getItem: async (req, res) => {
    return await Item.find();
  },

  addItem: async (req, res) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let name = await Item.findOne({ name: req.body.name });
    if (name)
      return res.status(400).json({ ErrorMsg: "This item already registered" });
    let itemData = new Item({
      name: req.body.name,
      price: req.body.price,
      mfd: req.body.mfd,
      perdayrent: req.body.perdayrent,
    });

    return await itemData.save();
  },

  updateItem: async (req, res) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let item = await Item.findById(
      req.params.id,
      {
        name: req.body.name,
        price: req.body.price,
        mfd: req.body.mfd,
        perdayrent: req.body.perdayrent,
      },
      { new: true }
    );
    return await item;
  },

  deleteItem: async (req, res) => {
    let item = await Item.findOneAndDelete(req.params.id);
    if (!item) return res.status(400).send("No item found to delete!");
    return item;
  },
};
