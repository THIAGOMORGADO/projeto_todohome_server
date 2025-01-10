const { Router } = require("express");
const AccountsControllers = require("../controllers/UserControllers");
const ProviderController = require("../controllers/ProviderControllers");
const AddressController = require("../controllers/addressControllers");

const routes = new Router();

routes.get("/", AccountsControllers.gatAll);
routes.post("/accounts", AccountsControllers.create);
routes.put("/accounts/:id", AccountsControllers.update);
routes.delete("/accounts/:id", AccountsControllers.update);

// Provider
routes.get("/providers", ProviderController.getProviderUser);

// Address

module.exports = routes;
