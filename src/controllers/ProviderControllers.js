const User = require("../models/accounts");
const Provider = require("../models/provider");

const ProviderController = {
  async getProviderUser(req, res) {
    const provider = await Provider.findAll();
    return res.status(200).json(provider);

    console.log(provider);
  },

  async postProviderUser(req, res) {
    const { id } = req.params;

    console.log(req.params.id);

    const { creci, rg, cpf, cnpj, birthDate, role } = req.body;

    const userExists = await User.findByPk(id);

    if (!userExists) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    const provider = await Provider.create({
      userId: userExists.id,
      creci,
      rg,
      cpf,
      cnpj,
      birthDate,
      role,
    });

    console.log(provider);

    return res.status(201).json(provider);
  },
};

module.exports = ProviderController;
