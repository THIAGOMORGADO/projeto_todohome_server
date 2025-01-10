const { Router } = require("express");
const AccountsControllers = require("../controllers/UserControllers");
const ProviderController = require("../controllers/ProviderControllers");
const AddressController = require("../controllers/addressControllers");

const routes = new Router();

routes.get("/accounts", AccountsControllers.gatAll);
routes.post("/accounts/create", AccountsControllers.create);
routes.put("/accounts/:id", AccountsControllers.update);
routes.delete("/accounts/:id", AccountsControllers.delete);

// Provider
routes.get("/providers", ProviderController.getProviderUser);
routes.post("/providers/create/:id", ProviderController.postProviderUser);

// Address
routes.get("/address", AddressController.getAddressAll);
routes.post("/address/create/:id", AddressController.postAddressUser);

module.exports = routes;
