const User = require("../models/accounts");
const Address = require("../models/Address");

const AddressController = {
  async getAddressAll(req, res) {
    const address = await Address.findAll();
    return res.status(200).json(address);
  },

  async postAddressUser(req, res) {
    const { id } = req.params;

    const { address, neighborhood, city, state, zipCode, uf } = req.body;

    const userExists = await User.findByPk(id);

    if (!userExists) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    const newaddress = await Address.create({
      userId: userExists.id,
      address,
      neighborhood,
      city,
      state,
      zipCode,
      uf,
    });

    return res.status(201).json(newaddress);
  },
};

module.exports = AddressController;
