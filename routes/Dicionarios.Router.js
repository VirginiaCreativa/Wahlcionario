const express = require("express");
const DicionariosController = require("../controllers/Dicionarios.Controller");

function DicionariosRouter(app) {
  const router = express.Router();
  app.use("/palabra", router);

  router.get("/:search", (req, res) => {
    DicionariosController.fetchDicionariosDefinicion(req, res);
    // DicionariosController.fetchDicionariosSinonimo(req, res);
  });
}

module.exports = DicionariosRouter;
