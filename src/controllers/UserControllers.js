const bcrypt = require("bcrypt");
const User = require("../models/accounts");

const AccountsControllers = {
  async gatAll(req, res) {
    const user = await User.findAll();
    return res.status(200).json(user);
  },
  async create(req, res) {
    const {
      name,
      email,
      password,
      address,
      neighborhood,
      city,
      state,
      country,
      zipCode,
      uf,
      provider,
      creci,
      rg,
      cpf,
      cnpj,
      birthDate,
    } = req.body;

    const emailExists = await User.findOne({
      where: {
        email,
      },
    });

    if (!emailExists) {
      const passwordHash = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: passwordHash,
        address,
        neighborhood,
        city,
        state,
        country,
        zipCode,
        uf,
        provider,
        creci,
        rg,
        cpf,
        cnpj,
        birthDate,
      });

      return res.status(200).json({
        message: "User created successfully",
        user,
      });
    }

    return res.status(200).json({
      message: "email already exists",
    });
  },

  async update(req, res) {
    const { id } = req.params;

    const { email, password, address, neighborhood, city, state, zipCode, uf } =
      req.body;

    const user = await User.findByPk(id);

    if (user) {
      const updatedUser = await user.update(
        {
          email,
          password,
          address,
          neighborhood,
          city,
          state,
          zipCode,
          uf,
        },
        { returning: true }
      );

      return res.status(200).json(updatedUser);
    }
    console.log(user);

    return res.json(user);
  },
  async delete(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (user) {
      await user.destroy();
      return res.status(200).json({
        message: "User deleted successfully",
      });
    }

    return res.status(404).json({
      message: "User not found",
    });
  },
};

module.exports = AccountsControllers;
