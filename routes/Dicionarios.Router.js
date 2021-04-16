const express = require("express");
const DicionariosController = require("../controllers/Dicionarios.Controller");

function DicionariosRouter(app) {
  const router = express.Router();
  app.use("/palabra", router);

  router.get("/:search", (req, res) => {
    DicionariosController.fetchDicionariosDefinicion(req, res);
  });
  router.get("/images/:images", (req, res) => {
    DicionariosController.fetchDicionariosImages(req, res);
  });

  router.get("/conjugacion", (req, res) => {
    DicionariosController.fetchSetConjugacion(req, res);
  });
}

module.exports = DicionariosRouter;
