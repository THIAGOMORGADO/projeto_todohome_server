const User = require("../models/accounts");

const ProviderController = {
  async getProviderUser() {
    try {
      // Buscando o usuário com o ID e incluindo o provedor associado
      const user = await User.findByPk(userId, {
        include: {
          model: Provider, // Inclui as informações do Provider
          as: "provider", // Alias para o relacionamento
        },
      });

      if (!user) {
        return { error: "Usuário não encontrado" };
      }

      // Retorna os dados do usuário com as informações do provedor
      return user;
    } catch (error) {
      console.error(error);
      return { error: "Erro ao buscar o usuário e o provedor" };
    }
  },
};

module.exports = ProviderController;
