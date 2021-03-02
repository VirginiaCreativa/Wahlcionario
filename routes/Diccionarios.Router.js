const express = require("express");
const DiccionariosController = require("../controllers/Diccionarios.Controller");

function DiccionariosRouter(app) {
  const router = express.Router();
  app.use("/palabra", router);

  router.get("/:search", (req, res) => {
    // console.log(req.params.search);
    DiccionariosController.fetchPalabraDiccionario(req, res);
  });
}

module.exports = DiccionariosRouter;
