const routes = require("express").Router();

const authMiddleware = require("./app/middleware/auth");

const SessionController = require("./app/controllers/SessionController");

//rotas rest
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

//.send para enviar a resposta
routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
